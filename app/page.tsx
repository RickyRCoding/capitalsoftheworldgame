import Link from "next/link";

export default function Home() {
  return (
    <div className="start">
      <h1 className="title">Capitals of the World Game</h1>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        So ... (scroll to continue)
      </h3>
      <div className="space"></div>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        You think that you&apos;re that one nerdy guy...
      </h3>
      <div className="space"></div>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        who knows the capital of every single country known.
      </h3>
      <div className="space"></div>
      <h3
        style={{
          marginBottom: "9rem",
        }}
      >
        I&apos;ll be the one to decide that.
      </h3>
      <Link href="/quiz" className="button">
        Try me!
      </Link>
    </div>
  );
}
