const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const config = require("config");
const User = require("../models/User");


// @route       POST api/users
// @desc        Register applicant
// @access      Public
router.post(
    "/",
    [
        check("name", "Name is required").not().isEmpty(),
        check("surname", "Surname is required").not().isEmpty(),
        check("email", "Please inclue a valid email").isEmail(),
        check("phone", "Phone number needs to be 10 digit").isLength({ max: 10 }),
        check("status", "Status is required").not().isEmpty(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, surname, email, phone, bid, status } = req.body;

        try {
            let user = await User.findOne({ email });
            if (user) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: "User already exist" }] });
            }

            user = new User({
                name,
                surname,
                email,
                phone,
                bid,
                status,
            });

            await user.save();
            res.json({ user });
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

// A RANDOM ENDPOINT TO USE



module.exports = router;