interface PaintSplashProps {
  color?: string;
  className?: string;
}

export default function PaintSplash({ color = '#FF6B6B', className = '' }: PaintSplashProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill={color}
        d="M47.5,-57.2C59.9,-46.3,67.5,-29.7,69.8,-12.4C72.1,4.9,69.1,22.9,60,36.4C50.9,49.9,35.8,59,19.4,63.4C3,67.8,-14.7,67.5,-30.1,61C-45.5,54.5,-58.6,41.8,-65.1,26.1C-71.6,10.4,-71.5,-8.3,-64.8,-23.5C-58.1,-38.7,-44.8,-50.4,-30.6,-60.5C-16.4,-70.6,-1.3,-79.1,12.6,-77.3C26.5,-75.5,35.1,-68.1,47.5,-57.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
