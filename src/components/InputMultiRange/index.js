class InputMultiRange {
    constructor(cid) {
        this.container = document.querySelector(cid);
        this.minGap = 1;

        this.render();
        this.attachEventListeners();
        this.updateTrack();
    }

    render() {
        this.container.innerHTML = `
            <div class="range-slider">
                <span>Выберите диапазон</span>
                <div class="range-container">
                    <input type="number" name="minValue" min="0" max="100" placeholder="от 0">
                    <input type="number" name="maxValue" min="0" max="100" placeholder="до 100">
                </div>
                        
                <div class="slider-container">
                    <input type="range" name="rangeMin" min="0" max="100" value="0" step="1">
                    <input type="range" name="rangeMax" min="0" max="100" value="100" step="1">
                    <div class="slider-track"></div>
                </div>
            <div/>
        `;

        this.minInput = this.container.querySelector('input[name="minValue"]');
        this.maxInput = this.container.querySelector('input[name="maxValue"]');
        this.rangeMin = this.container.querySelector('input[name="rangeMin"]');
        this.rangeMax = this.container.querySelector('input[name="rangeMax"]');
        this.sliderTrack = this.container.querySelector(".slider-track");
    }

    attachEventListeners() {
        this.rangeMin.addEventListener("input", (event) => this.updateValues(event));
        this.rangeMax.addEventListener("input", (event) => this.updateValues(event));
        this.minInput.addEventListener("input", (event) => {
            this.rangeMin.value = this.minInput.value;
            this.updateValues(event);
        });
        this.maxInput.addEventListener("input", (event) => {
            this.rangeMax.value = this.maxInput.value;
            this.updateValues(event);
        });
    }
    
    updateValues(event) {
        let min = parseInt(this.rangeMin.value);
        let max = parseInt(this.rangeMax.value);
    
        if (max - min < this.minGap) {
            if (event.target === this.rangeMin) {
                this.rangeMin.value = max - this.minGap;
            } else {
                this.rangeMax.value = min + this.minGap;
            }
        }
    
        this.minInput.value = this.rangeMin.value;
        this.maxInput.value = this.rangeMax.value;
        
        this.updateTrack();
    }
    
    updateTrack() {
        let percentMin = (this.rangeMin.value / this.rangeMax.max) * 100;
        let percentMax = (this.rangeMax.value / this.rangeMax.max) * 100;
        this.sliderTrack.style.left = percentMin + "%";
        this.sliderTrack.style.width = percentMax - percentMin + "%";
    }
}

export default InputMultiRange;