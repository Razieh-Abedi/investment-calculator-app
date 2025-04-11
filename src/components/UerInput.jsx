export default function UserInput({ formInfo, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            name="initialInvestment"
            required
            value={formInfo.initialInvestment}
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            name="annualInvestment"
            required
            value={formInfo.annualInvestment}
            onChange={onInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input
            type="number"
            name="expectedReturn"
            required
            value={formInfo.expectedReturn}
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            required
            value={formInfo.duration}
            onChange={onInputChange}
          />
        </p>
      </div>
    </section>
  );
}
