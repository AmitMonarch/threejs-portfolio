import { colleagueFeedbacks } from "../constants/index.js";

const ColleagueFeedback = () => {
  return (
    <section className="c-space my-20" id="feedback">
      <h3 className="head-text">Feedback from Colleagues</h3>

      <div className="client-container">
        {colleagueFeedbacks.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div>
              <p className="text-slate-200 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-slate-100">{item.name}</p>
                    <p className="text-slate-400 md:text-base text-sm font-light">
                      {item.position}
                    </p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img
                      key={index}
                      src="/assets/star.png"
                      alt="star"
                      className="w-5 h-5"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColleagueFeedback;
