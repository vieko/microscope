Accounts.onCreateUser(function (options, user) {
  user.intercomHash = IntercomHash(user, 'Uc9uuRfYCju9bRz1rfyDWFD6tzuIQFxSfLeo8q63');

  if (options.profile) user.profile = options.profile;

  return user;
});
