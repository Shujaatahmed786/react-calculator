const UserInput = ({ handleChange, userInput }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p className="inp-1">
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleChange("annualInvestment", event.target.value)
            }
          />{" "}
        </p>
      </div>
      <div className="input-group">
        <p className="inp-1">
          <label>Expected return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>

        <p>
          <label className="inp-1">Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />{" "}
        </p>
      </div>
    </section>
  );
};

export default UserInput;
