import "./App.css";
import * as React from "react";
import Switch from "@mui/material/Switch";
import { useState } from "react";

const PasswordGenerator = () => {
  const [Password, setPassword] = useState("");
  const [Passwordlength, setPasswordlength] = useState(8);
  const [includeUppercase, setUppercase] = useState(false);
  const [includeNumbers, setNumbers] = useState(false);
  const [includeSpecialCharacters, setSpecialCharacters] = useState(false);

  const generatePassword = () => {
    const Uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const SpecialCharacters = "!@#$%^&*";

    let validChars = LowerCase;
    if (includeUppercase) {
      validChars += Uppercase;
    }
    if (includeNumbers) {
      validChars += numbers;
    }
    if (includeSpecialCharacters) {
      validChars += SpecialCharacters;
    }
    let generatePassword = "";

    for (var i = 0; i < Passwordlength; i++) {
      const charIndex = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.charAt(charIndex);
    }
    setPassword(generatePassword);
  };

  return (
    <div className="container main-container">
      <div className="row">
        <div className="col">
          <form>
            <div className="pass_includes">
              <label>Password Length:</label>
              <br />
              <input
                type="number"
                placeholder="Length"
                style={{ width: "25%" }}
                value={Passwordlength}
                onChange={(e) => {
                  setPasswordlength(e.target.value);
                }}
              />
            </div>
            <div className="pass_includes">
              <label>Include Uppercase</label>
              <div>
                <Switch
                  checked={includeUppercase}
                  onChange={(e) => {
                    setUppercase(e.target.checked);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <br />
              </div>
            </div>
            <div className="pass_includes">
              <label>Include Numbers</label>
              <div>
                <Switch
                  checked={includeNumbers}
                  onChange={(e) => {
                    setNumbers(e.target.checked);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <br />
              </div>
            </div>
            <div className="pass_includes">
              <label>Special Characters</label>
              <div>
                <Switch
                  checked={includeSpecialCharacters}
                  onChange={(e) => {
                    setSpecialCharacters(e.target.checked);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
                <br />
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={generatePassword}
              >
                Generate Password
              </button>
            </div>
            <div className="passwordContainer text-center mt-2">
              <p>
                <b>Generated Password:</b> {Password}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
