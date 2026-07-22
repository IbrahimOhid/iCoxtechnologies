import React from 'react'

const Heading = ({title, paragraph, description}) => {
  return (
    <div>
      <div className="mx-auto mb-14 max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {title}
        </span>

        <h2 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
          {paragraph}
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Heading