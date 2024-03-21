import { PaintingsIndex } from "./PaintingsIndex";

export function Bio({ paintings }) {
  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Meet Yosefa</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              {" "}
              Welcome to the vibrant world of Yosefa, where art meets tradition in a symphony of colors and creativity.
              As a Jewish frum artist, Yosefa infuses her work with passion, spirituality, and a deep connection to her
              roots. Her talent shines through in every brushstroke, bringing to life captivating Judaica modern
              paintings that resonate with the soul. Inspired by the beauty of the Kosel and other cherished symbols of
              Judaism, Yosefa's art transports you to a realm where tradition meets innovation. With each piece, she
              invites you on a journey of discovery and reflection, weaving together elements of faith and contemporary
              expression. Yosefa's warm personality and artistic vision make her not only a talented creator but also a
              cherished soul. Explore her gallery, and allow her art to adorn your space with beauty and meaning.
            </p>
          </div>
        </div>
      </header>
      <PaintingsIndex paintings={paintings} />
    </div>
  );
}
