import { SVGProps } from 'react';

export const HomeIcon = ({
   width = '24',
   height = '24',
   color = 'currentColor',
   ...props
}: SVGProps<SVGSVGElement>) => (
   <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
   >
      <path
         fill-rule="evenodd"
         clip-rule="evenodd"
         d="M5.472 13.6276H4.24104C3.12875 13.6276 2.58709 12.2635 3.36836 11.5114L10.465 3.70985C11.4023 2.76335 12.922 2.76335 13.8584 3.71003L20.6384 11.5111C21.411 12.2922 20.8643 13.6276 19.7663 13.6276H18.4704V18.9518C18.4704 20.0833 17.5521 20.9998 16.4196 20.9998H14.3515C13.67 20.9998 13.1191 20.4432 13.1191 19.7588V15.982C13.1191 15.2996 12.7759 14.922 11.9712 14.922C11.1515 14.922 10.8094 15.2907 10.8223 15.9735C10.8284 16.284 10.8304 16.9125 10.8292 17.7686C10.8287 18.147 10.8275 18.5513 10.8259 18.9623C10.8246 19.3143 10.8232 19.5964 10.8223 19.7588C10.8223 20.4435 10.2722 20.9998 9.58998 20.9998H7.52187C6.38952 20.9998 5.472 20.0834 5.472 18.9518V13.6276ZM10.1911 9.56571C10.1911 10.5559 10.9872 11.36 11.9712 11.36C12.9544 11.36 13.7504 10.5557 13.7504 9.56571C13.7504 8.5757 12.9544 7.77137 11.9712 7.77137C10.9872 7.77137 10.1911 8.57551 10.1911 9.56571ZM12.8936 9.56571C12.8936 10.0843 12.4793 10.5029 11.9712 10.5029C11.4623 10.5029 11.0479 10.0844 11.0479 9.56571C11.0479 9.04706 11.4623 8.62852 11.9712 8.62852C12.4793 8.62852 12.8936 9.04716 12.8936 9.56571ZM3.98251 12.1084L11.0862 4.29992C11.6727 3.7082 12.6384 3.7052 13.2402 4.30373L20.0106 12.0937C20.2691 12.3563 20.0996 12.7705 19.7663 12.7705H18.042C17.8054 12.7705 17.6136 12.9623 17.6136 13.199V18.9518C17.6136 19.6094 17.0793 20.1427 16.4196 20.1427H14.3515C14.1451 20.1427 13.9759 19.9717 13.9759 19.7588V15.982C13.9759 14.8433 13.2681 14.0649 11.9712 14.0649C10.6609 14.0649 9.94391 14.8377 9.96562 15.9901C9.97166 16.2926 9.97364 16.918 9.97243 17.7674C9.97189 18.145 9.97074 18.5486 9.96916 18.959C9.96781 19.3105 9.96645 19.5921 9.96555 19.7565C9.96555 19.9721 9.79688 20.1427 9.58998 20.1427H7.52187C6.86242 20.1427 6.3288 19.6097 6.3288 18.9518V13.199C6.3288 12.9623 6.137 12.7705 5.9004 12.7705H4.24104C3.90264 12.7705 3.73466 12.3474 3.98251 12.1084Z"
         fill={color}
      />
      <mask
         id="mask0_11164_2475"
         style={{ maskType: 'luminance' }}
         maskUnits="userSpaceOnUse"
         x="3"
         y="3"
         width="18"
         height="18"
      >
         <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.472 13.6276H4.24104C3.12875 13.6276 2.58709 12.2635 3.36836 11.5114L10.465 3.70985C11.4023 2.76335 12.922 2.76335 13.8584 3.71003L20.6384 11.5111C21.411 12.2922 20.8643 13.6276 19.7663 13.6276H18.4704V18.9518C18.4704 20.0833 17.5521 20.9998 16.4196 20.9998H14.3515C13.67 20.9998 13.1191 20.4432 13.1191 19.7588V15.982C13.1191 15.2996 12.7759 14.922 11.9712 14.922C11.1515 14.922 10.8094 15.2907 10.8223 15.9735C10.8284 16.284 10.8304 16.9125 10.8292 17.7686C10.8287 18.147 10.8275 18.5513 10.8259 18.9623C10.8246 19.3143 10.8232 19.5964 10.8223 19.7588C10.8223 20.4435 10.2722 20.9998 9.58998 20.9998H7.52187C6.38952 20.9998 5.472 20.0834 5.472 18.9518V13.6276ZM10.1911 9.56571C10.1911 10.5559 10.9872 11.36 11.9712 11.36C12.9544 11.36 13.7504 10.5557 13.7504 9.56571C13.7504 8.5757 12.9544 7.77137 11.9712 7.77137C10.9872 7.77137 10.1911 8.57551 10.1911 9.56571ZM12.8936 9.56571C12.8936 10.0843 12.4793 10.5029 11.9712 10.5029C11.4623 10.5029 11.0479 10.0844 11.0479 9.56571C11.0479 9.04706 11.4623 8.62852 11.9712 8.62852C12.4793 8.62852 12.8936 9.04716 12.8936 9.56571ZM3.98251 12.1084L11.0862 4.29992C11.6727 3.7082 12.6384 3.7052 13.2402 4.30373L20.0106 12.0937C20.2691 12.3563 20.0996 12.7705 19.7663 12.7705H18.042C17.8054 12.7705 17.6136 12.9623 17.6136 13.199V18.9518C17.6136 19.6094 17.0793 20.1427 16.4196 20.1427H14.3515C14.1451 20.1427 13.9759 19.9717 13.9759 19.7588V15.982C13.9759 14.8433 13.2681 14.0649 11.9712 14.0649C10.6609 14.0649 9.94391 14.8377 9.96562 15.9901C9.97166 16.2926 9.97364 16.918 9.97243 17.7674C9.97189 18.145 9.97074 18.5486 9.96916 18.959C9.96781 19.3105 9.96645 19.5921 9.96555 19.7565C9.96555 19.9721 9.79688 20.1427 9.58998 20.1427H7.52187C6.86242 20.1427 6.3288 19.6097 6.3288 18.9518V13.199C6.3288 12.9623 6.137 12.7705 5.9004 12.7705H4.24104C3.90264 12.7705 3.73466 12.3474 3.98251 12.1084Z"
            fill="white"
         />
      </mask>
      <g mask="url(#mask0_11164_2475)"></g>
   </svg>
);
