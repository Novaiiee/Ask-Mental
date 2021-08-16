import { compare } from "bcrypt";
import passport, { use } from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { UserModel } from "./models/user.model";

export const setupPassport = () => {
  //login
  passport.use(new LocalStrategy({ usernameField: "email", session: true }, async (email, password, done) => {
    const user = await UserModel.findOne({ email });

    if (!user) return done("User not found", false);
    if (!verifyPassword(password, user.password)) return done("Password is incorrect", false);

    return done(null, user);
  }));

  passport.serializeUser((user: any, done: any) => done(null, user.id))
  passport.deserializeUser(async (id: string, done: any) => {
    const user = await UserModel.findOne({ id });
    if (!user) return done("User not found", false);

    return done(null, user);
  })
};


function verifyPassword(password: string, encrypted: string) {
  return compare(password, encrypted);
}