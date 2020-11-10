const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  };
  const gutterWidth = 15;
  const newBreakpoint = obj =>
    Object.assign(
      [obj.orLarger], // causes orLarger to be returned when parsed as template literal
      obj,
      { only: `${obj.orSmaller} and ${obj.orLarger}` }
    );
  
  const xs = newBreakpoint({
    orSmaller: `(max-width: ${breakpoints.sm - 1}px)`,
    orLarger: `screen`,
  });
  
  const sm = newBreakpoint({
    orSmaller: `(max-width: ${breakpoints.md - 1}px)`,
    orLarger: `(min-width: ${breakpoints.sm}px)`,
    containerWidth: breakpoints.sm - 18,
  });
  
  const md = newBreakpoint({
    orSmaller: `(max-width: ${breakpoints.lg - 1}px)`,
    orLarger: `(min-width: ${breakpoints.md}px)`,
    containerWidth: breakpoints.md - 18,
  });
  
  const lg = newBreakpoint({
    orSmaller: `(max-width: ${breakpoints.xl - 1}px)`,
    orLarger: `(min-width: ${breakpoints.lg}px)`,
    containerWidth: breakpoints.lg - 18,
  });
  
  const xl = newBreakpoint({
    orSmaller: `screen`,
    orLarger: `(min-width: ${breakpoints.xl}px)`,
    containerWidth: breakpoints.xl - 30,
  });
  
  export { xs, sm, md, lg, xl, gutterWidth };
  