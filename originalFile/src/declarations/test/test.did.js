export const idlFactory = ({ IDL }) => {
  const CreateProfileError = IDL.Variant({
    'profileAlreadyExists' : IDL.Null,
    'userNotAuthenticated' : IDL.Null,
  });
  const CreateProfileResponse = IDL.Variant({
    'ok' : IDL.Bool,
    'err' : CreateProfileError,
  });
  const Profile = IDL.Record({ 'bio' : IDL.Text, 'username' : IDL.Text });
  const GetProfileError = IDL.Variant({
    'userNotAuthenticated' : IDL.Null,
    'profileNotFound' : IDL.Null,
  });
  const GetProfileResponse = IDL.Variant({
    'ok' : Profile,
    'err' : GetProfileError,
  });
  return IDL.Service({
    'createProfile' : IDL.Func(
        [IDL.Text, IDL.Text],
        [CreateProfileResponse],
        [],
      ),
    'getProfile' : IDL.Func([], [GetProfileResponse], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
