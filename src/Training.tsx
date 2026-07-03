const TRAINING_URL = "/training/index.html";

export function Training() {
  return (
    <main className="w-full" style={{ height: "calc(100vh - 5.5rem)" }}>
      <iframe
        src={TRAINING_URL}
        title="Sustainable Antimicrobial Prescribing Training"
        className="w-full h-full border-0 bg-white"
        allow="fullscreen"
      />
    </main>
  );
}
