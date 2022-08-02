export default function Footer() {
  return (
    <footer>
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="fields">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
      </div>
      <button className="submit">Subscribe</button>
    </footer>
  );
}
