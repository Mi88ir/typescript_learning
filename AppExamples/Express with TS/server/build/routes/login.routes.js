"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403).send("Not permitted!");
}
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
    res.send(`
    <form method="post">
    <div>
        <label>Email</label>
        <input type="email" name="email" />
    </div>
    <div>
        <label>Password</label>
        <input type="password" name="password" />
    </div>
    <button type="submit">Submit</button>
  `);
});
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "mihir@example.com" &&
        password === "mihir123") {
        req.session = { loggedIn: true };
        res.redirect("/");
    }
    else {
        res.send("Invalid email or password");
    }
});
router.get("/", (req, res) => {
    //get req.session property to check if user is logged in
    if (req.session && req.session.loggedIn) {
        res.send(`
      <div>
        <div> You are logged in! </div>
        <a href="/logout">Logout</a>
      </div>
    `);
    }
    else {
        res.send(`
    <div>
      <div> You are not logged in! </div>
      <a href="/login">Login</a>
    </div>
  `);
    }
});
router.get("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
    res.send("Welcome to protected route!");
});
