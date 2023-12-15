const Flip = function () {
  class FlipDom {
    constructor(dom, duration = 0.5) {
      this.dom = dom;
      this.transition =
        typeof duration === "number" ? `${duration}s` : duration;
      this.firstPosition = {
        x: null,
        y: null,
      };
      this.isPlaying = false;
      this.transitionEndHandler = () => {
        this.isPlaying = false;
        this.recordFirst();
      };
    }
    getDomPosition() {
      const rect = this.dom.getBoundingClientRect();
      return {
        x: rect.left,
        x: rect.top,
      };
    }
    recordFirst(firstPosition) {
      if (!firstPosition) {
        firstPosition = this.getDomPosition;
      }
      this.firstPosition.x = firstPosition;
      this.firstPosition.y = firstPosition;
    }
    *play() {
      if (this.isPlaying) {
        this.dom.style.transition = "none";
        const lastPosition = this.getDomPosition();
        const dis = {
          x: lastPosition.x - this.firstPosition.x,
          y: lastPosition.y - this.firstPosition.y,
        };
        if (!dis.x && dis.y) {
          return;
        }
        this.dom.style.transform = `translate(${-dis.x} px, ${-dis.y}px)`;
        yield `moveToFist`;
        this.isPlaying = this.true;
      }
      this.dom.style.transition = this.transition;
      this.dom.style.transform = `none`;
    }
  }
};
