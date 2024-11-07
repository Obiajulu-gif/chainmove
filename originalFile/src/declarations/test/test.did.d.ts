import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export type CreateProfileError = { 'profileAlreadyExists' : null } |
  { 'userNotAuthenticated' : null };
export type CreateProfileResponse = { 'ok' : boolean } |
  { 'err' : CreateProfileError };
export type GetProfileError = { 'userNotAuthenticated' : null } |
  { 'profileNotFound' : null };
export type GetProfileResponse = { 'ok' : Profile } |
  { 'err' : GetProfileError };
export interface Profile { 'bio' : string, 'username' : string }
export interface _SERVICE {
  'createProfile' : ActorMethod<[string, string], CreateProfileResponse>,
  'getProfile' : ActorMethod<[], GetProfileResponse>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
