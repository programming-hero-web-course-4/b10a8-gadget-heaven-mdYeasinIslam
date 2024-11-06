
const BannerSlider = ({gadget}) => {
    return (
        <div className={`bg-[url('')] keen-slider__slide number-slide${gadget.id}`}>{gadget.id}</div>
    );
};

export default BannerSlider;