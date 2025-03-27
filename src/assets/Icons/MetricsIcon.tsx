import { SVGProps } from 'react';

export const MetricsIcon = ({
  width = '20',
  height = '19',
  color = 'currentColor',
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.2857 2.6508C14.2857 3.64308 14.6862 4.54473 15.5586 4.9989L13.7652 9.71959C13.5794 9.68424 13.5305 9.7187 13.3333 9.7187C12.7171 9.7187 12.1495 9.90426 11.6829 10.2144L10 8.53858C10.3333 8.10561 10.4762 7.64048 10.4762 7.06879C10.4762 5.60732 9.19429 4.41799 7.61905 4.41799C6.04381 4.41799 4.7619 5.60732 4.7619 7.06879C4.7619 7.94532 5.00476 8.57539 5.71429 9.05872L3.68476 13.3795C3.42095 13.3052 3.14667 13.2531 2.85714 13.2531C1.2819 13.2531 0 14.4415 0 15.9039C0 17.3654 1.2819 18.5547 2.85714 18.5547C4.43238 18.5547 5.71429 17.3654 5.71429 15.9039C5.71429 15.0265 5.57348 14.3874 4.86491 13.9049L7.05728 9.7187C7.32109 9.79381 7.32857 9.71959 7.61905 9.71959C8.23429 9.71959 8.6917 9.5866 9.15837 9.27734L10.9086 11.0746C10.5753 11.5076 10.4762 11.7987 10.4762 12.3695C10.4762 13.831 11.7581 15.0203 13.3333 15.0203C14.9086 15.0203 16.1905 13.831 16.1905 12.3695C16.1905 11.4037 15.8353 10.6774 15.001 10.2144L16.9016 5.30159C17.0625 5.3281 16.9733 5.30159 17.1429 5.30159C18.7181 5.30159 20 4.11227 20 2.6508C20 1.18932 18.7181 0 17.1429 0C15.5676 0 14.2857 1.18932 14.2857 2.6508Z"
      fill={color}
    />
  </svg>
);
