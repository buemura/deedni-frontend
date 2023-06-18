export default function LoginForm() {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="example@email.com" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="**********" />
      </div>

      <button>Submit</button>
    </form>
  );
}
