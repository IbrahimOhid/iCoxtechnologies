import Button from "../../components/Button/Button";
import AllWorkButton from "../Button/AllWorkButton";

const GrowBrand = () => {
  return (
    <div>
      {/* ─── CTA: "How can we help you?" ─── */}
      <div className="mt-16 sm:mt-20 text-center bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 rounded-3xl p-8 sm:p-12 border border-primary/10">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Ready to grow your brand?
          </h3>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Partner with our agency to design, build and scale digital products
            that deliver real business results.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <Button value={"Start a Project"} phone={"01317878615"} />
            <AllWorkButton value={"View Our Work"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowBrand