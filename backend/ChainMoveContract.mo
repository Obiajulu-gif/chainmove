import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Nat "mo:base/Nat";
import HashMap "mo:base/HashMap";
import Array "mo:base/Array";
import Result "mo:base/Result";
import Hash "mo:base/Hash";
import Text "mo:base/Text";
import Buffer "mo:base/Buffer";

actor class TransportDApp() {
  // User and Driver Profile Types
  type UserProfile = {
    fullName : Text;
    username : Text;
    email : Text;
    phoneNumber : Text; // Added phone number
  };

  type DriverProfile = {
    fullName : Text;
    username : Text;
    email : Text;
    phoneNumber : Text; // Added phone number
  };

  type Destination = {
    location : Text;
    fare : Nat;
    isAvailable : Bool
  };

  type DestinationInfo = {
    location : Text;
    fare : Nat;
    isAvailable : Bool;
    driverPrincipal : Principal;
    destinationId : Nat;
    driverName : Text
  };

  type Driver = {
    var destinationCount : Nat;
    destinations : HashMap.HashMap<Nat, Destination>;
    profile : DriverProfile
  };

  // Internal Ride type with mutable fields
  type Ride = {
    rideId : Nat;
    user : Principal;
    driver : Principal;
    destination : Text;
    fare : Nat;
    var isCompleted : Bool;
    var isCancelled : Bool;
    bookedAt : Time.Time;
    var completedAt : Time.Time;
    userName : Text;
    driverName : Text
  };

  // Shareable Ride type for public functions
  type SharedRide = {
    rideId : Nat;
    user : Principal;
    driver : Principal;
    destination : Text;
    fare : Nat;
    isCompleted : Bool;
    isCancelled : Bool;
    bookedAt : Int; // Time.Time is just an Int
    completedAt : Int;
    userName : Text;
    driverName : Text
  };

  private var rideCount : Nat = 0;
  private var registeredDrivers : [var Principal] = [var];

  private let drivers = HashMap.HashMap<Principal, Driver>(1, Principal.equal, Principal.hash);
  private let activeRides = HashMap.HashMap<Nat, Ride>(
    1,
    Nat.equal,
    func(n : Nat) : Hash.Hash {
      Text.hash(Nat.toText(n))
    }
  );
  private let completedRides = HashMap.HashMap<Nat, Ride>(
    1,
    Nat.equal,
    func(n : Nat) : Hash.Hash {
      Text.hash(Nat.toText(n))
    }
  );
  private let cancelledRides = HashMap.HashMap<Nat, Ride>(
    1,
    Nat.equal,
    func(n : Nat) : Hash.Hash {
      Text.hash(Nat.toText(n))
    }
  );

  private let isDriver = HashMap.HashMap<Principal, Bool>(1, Principal.equal, Principal.hash);
  private let isUser = HashMap.HashMap<Principal, Bool>(1, Principal.equal, Principal.hash);
  private let userProfiles = HashMap.HashMap<Principal, UserProfile>(1, Principal.equal, Principal.hash);

  // Helper function to convert Ride to SharedRide
  private func toSharedRide(ride : Ride) : SharedRide {
    {
      rideId = ride.rideId;
      user = ride.user;
      driver = ride.driver;
      destination = ride.destination;
      fare = ride.fare;
      isCompleted = ride.isCompleted;
      isCancelled = ride.isCancelled;
      bookedAt = ride.bookedAt;
      completedAt = ride.completedAt;
      userName = ride.userName;
      driverName = ride.driverName
    }
  };

  // Register a user with profile
  public shared (msg) func registerUser(fullName : Text, username : Text, email : Text, phoneNumber : Text) : async Result.Result<Bool, Text> {
    let caller = msg.caller;

    // Validate inputs
    if (Text.size(fullName) == 0) {return #err("Full name cannot be empty")};
    if (Text.size(username) == 0) {return #err("Username cannot be empty")};
    if (Text.size(email) == 0) {return #err("Email cannot be empty")};
    if (Text.size(phoneNumber) == 0) {
      return #err("Phone number cannot be empty")
    };

    switch (isUser.get(caller)) {
      case (?true) {#err("User already registered")};
      case (_) {
        let profile : UserProfile = {
          fullName = fullName;
          username = username;
          email = email;
          phoneNumber = phoneNumber
        };
        userProfiles.put(caller, profile);
        isUser.put(caller, true);
        #ok(true)
      }
    }
  };

  // Register a driver with profile
  public shared (msg) func registerDriver(fullName : Text, username : Text, email : Text, phoneNumber : Text) : async Result.Result<Bool, Text> {
    let caller = msg.caller;

    // Validate inputs
    if (Text.size(fullName) == 0) {return #err("Full name cannot be empty")};
    if (Text.size(username) == 0) {return #err("Username cannot be empty")};
    if (Text.size(email) == 0) {return #err("Email cannot be empty")};
    if (Text.size(phoneNumber) == 0) {
      return #err("Phone number cannot be empty")
    };

    switch (isDriver.get(caller)) {
      case (?true) {#err("Driver already registered")};
      case (_) {
        let profile : DriverProfile = {
          fullName = fullName;
          username = username;
          email = email;
          phoneNumber = phoneNumber
        };
        let newDriver : Driver = {
          var destinationCount = 0;
          destinations = HashMap.HashMap<Nat, Destination>(
            1,
            Nat.equal,
            func(n : Nat) : Hash.Hash {
              Text.hash(Nat.toText(n))
            }
          );
          profile = profile
        };
        drivers.put(caller, newDriver);
        isDriver.put(caller, true);

        let newArray : [var Principal] = Array.tabulateVar<Principal>(
          registeredDrivers.size() + 1,
          func(i) {
            if (i < registeredDrivers.size()) {
              registeredDrivers[i]
            } else {
              caller
            }
          }
        );
        registeredDrivers := newArray;
        #ok(true)
      }
    }
  };

  // Add a destination
  public shared (msg) func addDestination(location : Text, fare : Nat) : async Result.Result<Bool, Text> {
    let caller = msg.caller;

    switch (isDriver.get(caller)) {
      case (?true) {
        if (fare == 0) {
          return #err("Fare must be greater than zero")
        };

        switch (drivers.get(caller)) {
          case (?driver) {
            let destinationId = driver.destinationCount;
            let newDestination : Destination = {
              location = location;
              fare = fare;
              isAvailable = true
            };
            driver.destinations.put(destinationId, newDestination);
            driver.destinationCount += 1;
            #ok(true)
          };
          case null {#err("Driver not found in system")}
        }
      };
      case (_) {#err("Not a registered driver")}
    }
  };

  // Get all available destinations with driver info
  public query func getAllAvailableDestinations() : async [DestinationInfo] {
    var allDestinations : [DestinationInfo] = [];

    for (driverId in registeredDrivers.vals()) {
      switch (drivers.get(driverId)) {
        case (?driver) {
          for ((id, destination) in driver.destinations.entries()) {
            if (destination.isAvailable) {
              let destInfo : DestinationInfo = {
                location = destination.location;
                fare = destination.fare;
                isAvailable = destination.isAvailable;
                driverPrincipal = driverId;
                destinationId = id;
                driverName = driver.profile.fullName
              };
              allDestinations := Array.append(allDestinations, [destInfo])
            }
          }
        };
        case null {/* Skip if driver not found */}
      }
    };
    allDestinations
  };

  // Book a ride
  public shared (msg) func bookRide(driverAddress : Principal, destinationId : Nat) : async Result.Result<Nat, Text> {
    let caller = msg.caller;

    switch (isUser.get(caller)) {
      case (?true) {
        switch (drivers.get(driverAddress)) {
          case (?driver) {
            switch (driver.destinations.get(destinationId)) {
              case (?destination) {
                if (not destination.isAvailable) {
                  return #err("Destination is not available")
                };

                // Get user and driver names
                let userName = switch (userProfiles.get(caller)) {
                  case (?profile) {profile.fullName};
                  case null {"Unknown User"}
                };

                let newRide : Ride = {
                  rideId = rideCount;
                  user = caller;
                  driver = driverAddress;
                  destination = destination.location;
                  fare = destination.fare;
                  var isCompleted = false;
                  var isCancelled = false;
                  bookedAt = Time.now();
                  var completedAt = 0;
                  userName = userName;
                  driverName = driver.profile.fullName
                };

                activeRides.put(rideCount, newRide);
                rideCount += 1;
                #ok(rideCount - 1)
              };
              case null {#err("Destination not found")}
            }
          };
          case null {#err("Driver not found")}
        }
      };
      case (_) {#err("Not a registered user")}
    }
  };

  // Complete a ride
  public shared (msg) func completeRide(rideId : Nat) : async Result.Result<Bool, Text> {
    let caller = msg.caller;

    switch (activeRides.get(rideId)) {
      case (?ride) {
        if (caller != ride.driver and caller != ride.user) {
          return #err("Only the user or driver can complete the ride")
        };

        if (ride.isCompleted) {
          return #err("Ride is already completed")
        };

        if (ride.isCancelled) {
          return #err("Ride has been cancelled")
        };

        ride.isCompleted := true;
        ride.completedAt := Time.now();

        completedRides.put(rideId, ride);
        ignore activeRides.remove(rideId);
        #ok(true)
      };
      case null {#err("Ride not found")}
    }
  };

  // Cancel a ride
  public shared (msg) func cancelRide(rideId : Nat) : async Result.Result<Bool, Text> {
    let caller = msg.caller;

    switch (activeRides.get(rideId)) {
      case (?ride) {
        if (caller != ride.user) {
          return #err("Only the user can cancel")
        };

        if (ride.isCompleted) {
          return #err("Ride is already completed")
        };

        if (ride.isCancelled) {
          return #err("Ride is already cancelled")
        };

        ride.isCancelled := true;
        cancelledRides.put(rideId, ride);
        ignore activeRides.remove(rideId);
        #ok(true)
      };
      case null {#err("Ride not found")}
    }
  };

  // Get user's active rides
  public shared (msg) func getUserActiveRides() : async [SharedRide] {
    let caller = msg.caller;
    var userRides : Buffer.Buffer<SharedRide> = Buffer.Buffer(0);

    for ((_, ride) in activeRides.entries()) {
      if (ride.user == caller) {
        userRides.add(toSharedRide(ride))
      }
    };

    Buffer.toArray(userRides)
  };

  // Get user's completed rides
  public shared (msg) func getUserCompletedRides() : async [SharedRide] {
    let caller = msg.caller;
    var userRides : Buffer.Buffer<SharedRide> = Buffer.Buffer(0);

    for ((_, ride) in completedRides.entries()) {
      if (ride.user == caller) {
        userRides.add(toSharedRide(ride))
      }
    };

    Buffer.toArray(userRides)
  };

  // Get user's cancelled rides
  public shared (msg) func getUserCancelledRides() : async [SharedRide] {
    let caller = msg.caller;
    var userRides : Buffer.Buffer<SharedRide> = Buffer.Buffer(0);

    for ((_, ride) in cancelledRides.entries()) {
      if (ride.user == caller) {
        userRides.add(toSharedRide(ride))
      }
    };

    Buffer.toArray(userRides)
  };

  // Get driver's active rides
  public shared (msg) func getDriverActiveRides() : async [SharedRide] {
    let caller = msg.caller;
    var driverRides : Buffer.Buffer<SharedRide> = Buffer.Buffer(0);

    for ((_, ride) in activeRides.entries()) {
      if (ride.driver == caller) {
        driverRides.add(toSharedRide(ride))
      }
    };

    Buffer.toArray(driverRides)
  };

  // Get driver's completed rides
  public shared (msg) func getDriverCompletedRides() : async [SharedRide] {
    let caller = msg.caller;
    var driverRides : Buffer.Buffer<SharedRide> = Buffer.Buffer(0);

    for ((_, ride) in completedRides.entries()) {
      if (ride.driver == caller) {
        driverRides.add(toSharedRide(ride))
      }
    };

    Buffer.toArray(driverRides)
  }
}
