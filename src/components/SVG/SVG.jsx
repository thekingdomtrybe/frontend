import React from 'react';
import PropTypes from 'prop-types';

function SVG({
  icon,
  color,
  className,
  width,
}) {
  if (icon === 'favicon') {
    return (
      <svg width={width} viewBox="0 0 792 792">
        <path
          fill={color}
          className={className}
          d="
            M409.000000,1.000000
            C414.022095,1.000000 419.044189,1.000000 424.590698,1.343281
            C426.771576,3.503434 428.159851,3.802516 429.000000,1.000000
            C429.444458,1.000000 429.888885,1.000000 430.723663,1.374509
            C431.951172,2.150143 432.753021,2.784354 433.630829,2.917479
            C447.084045,4.957651 460.610718,6.579752 473.995453,8.991969
            C507.476898,15.026044 539.371460,26.056047 569.942627,40.860950
            C597.649353,54.278664 623.276978,70.921318 647.238892,90.331879
            C668.006042,107.154495 686.829407,125.884361 703.757080,146.393921
            C726.133057,173.504669 744.543518,203.208344 758.899841,235.419205
            C774.832703,271.167114 785.458008,308.315765 790.193665,347.171936
            C790.640808,350.840820 792.041870,354.393402 793.000000,358.000000
            C793.000000,384.020905 793.000000,410.041779 792.610596,436.604797
            C791.829529,438.001129 791.208008,438.822662 791.081238,439.714569
            C789.562195,450.400726 788.995422,461.310486 786.464294,471.745697
            C781.560791,491.961578 776.308411,512.156189 769.837952,531.913391
            C760.791138,559.537415 747.381409,585.241699 731.787231,609.744202
            C717.197144,632.669006 700.560791,653.953918 681.367798,673.316528
            C665.371094,689.454529 648.651123,704.713379 630.278870,718.014832
            C608.374390,733.873657 585.049255,747.362976 560.326416,758.505310
            C522.351990,775.619934 482.768494,786.493713 441.362335,790.870789
            C439.850098,791.030640 438.451538,792.265869 437.000000,793.000000
            C411.979095,793.000000 386.958221,793.000000 361.497925,792.753174
            C360.871246,792.260559 360.684021,792.014709 360.496765,791.768860
            C360.331146,792.179199 360.165558,792.589600 360.000000,793.000000
            C359.250000,793.000000 358.500000,793.000000 357.320862,792.636475
            C355.712219,791.854675 354.559570,791.184631 353.349152,791.055298
            C329.998962,788.559509 307.033020,783.982910 284.555725,777.311768
            C271.384064,773.402527 258.231201,769.047119 245.687683,763.496338
            C228.019516,755.677917 210.550964,747.230225 193.709000,737.782471
            C181.531006,730.950928 170.241135,722.413513 159.050262,713.979980
            C148.146317,705.762573 137.114182,697.467163 127.499184,687.846008
            C113.257622,673.595337 99.911377,658.408081 86.741966,643.138306
            C69.759819,623.447754 56.221416,601.317505 44.630943,578.166870
            C36.441086,561.808716 29.535175,544.750000 22.987371,527.647400
            C18.486586,515.891541 15.407598,503.572784 12.044184,491.408539
            C10.554154,486.019592 9.911520,480.394379 8.921163,474.869812
            C7.556588,467.257690 5.927227,459.676941 4.965038,452.013245
            C3.961969,444.023956 3.678718,435.946106 2.906692,427.923737
            C2.807934,426.897491 1.661226,425.972107 0.999996,425.000000
            C1.000000,420.310760 1.000000,415.621490 1.361290,410.231995
            C1.843143,400.667572 1.986763,391.803558 2.036415,382.939026
            C2.040025,382.294647 1.361415,381.646423 0.999996,381.000000
            C1.000000,376.975464 1.000000,372.950897 1.388174,368.362061
            C2.515333,363.013214 3.279877,358.232452 3.988176,353.443329
            C5.645308,342.238739 6.754459,330.922028 9.051170,319.851074
            C11.792725,306.635864 15.280444,293.555969 18.944544,280.558319
            C21.471254,271.595306 24.625454,262.788666 27.898478,254.061890
            C31.884501,243.434052 36.024155,232.846054 40.611576,222.468140
            C43.414803,216.126526 46.860878,210.006348 50.585724,204.147507
            C59.196461,190.603622 67.670479,176.928558 77.103203,163.963867
            C86.687683,150.790588 96.779144,137.881622 107.726799,125.836906
            C116.925430,115.716522 127.356972,106.630371 137.822723,97.771614
            C149.012085,88.300354 160.664215,79.335365 172.503265,70.681465
            C190.785995,57.317463 211.005188,47.211098 231.278000,37.310799
            C240.029938,33.036766 249.052536,29.222067 258.201935,25.883028
            C267.665497,22.429333 277.346375,19.483376 287.086548,16.896368
            C300.791840,13.256203 314.527679,9.537520 328.459869,7.003890
            C340.541626,4.806773 352.917816,4.238774 365.150818,2.836580
            C365.828491,2.758902 366.386353,1.636255 367.000000,0.999999
            C372.688049,1.000000 378.376068,1.000000 384.758606,1.367663
            C390.833496,1.809437 396.215546,1.991052 401.593597,1.909665
            C404.066437,1.872244 406.531433,1.319221 409.000000,1.000000
            M68.630486,271.124756
            C58.085388,298.399658 51.246449,326.567627 47.805885,355.613892
            C42.432652,400.976379 45.257751,445.800903 57.733978,489.710632
            C86.082092,589.480957 146.761322,663.193604 238.539139,711.275024
            C263.208466,724.198975 289.333588,733.405945 316.715485,739.760315
            C316.715485,623.085938 316.715485,506.692047 316.715485,389.845734
            C276.051270,389.845734 235.647614,389.845734 195.147491,389.845734
            C195.147491,354.977173 195.147491,320.561676 195.147491,286.017395
            C328.129669,286.017395 460.850891,286.017395 593.729004,286.017395
            C593.729004,320.703308 593.729004,355.110321 593.729004,390.089844
            C558.435486,390.089844 523.392700,390.089844 488.441650,390.089844
            C488.441650,506.021515 488.441650,621.379944 488.441650,737.051208
            C490.731537,736.418579 492.639282,735.908752 494.537262,735.364807
            C636.577332,694.652344 737.986755,569.111450 748.142029,421.121887
            C753.004211,350.268188 737.827271,283.776611 702.513245,222.221771
            C624.508911,86.254982 466.934998,17.545921 314.864655,55.361156
            C196.811066,84.717476 115.233353,157.928619 68.630486,271.124756
            M451.509216,514.500427
            C451.509216,473.066803 451.509216,431.633179 451.509216,390.199402
            C418.575531,390.199402 386.306549,390.199402 354.059021,390.199402
            C354.059021,509.037354 354.059021,627.603333 354.059021,746.432983
            C386.731934,750.345337 419.006622,749.978088 451.509155,744.810181
            C451.509155,668.136292 451.509155,591.818359 451.509216,514.500427
            z"
        />
      </svg>
    );
  }

  if (icon === 'menu') {
    return (
      <svg width={width} className={className} viewBox="0 0 24 24" fill={color}>
        <path d="M14 6C14 7.105 13.105 8 12 8C10.895 8 10 7.105 10 6C10 4.895 10.895 4 12 4C13.105 4 14 4.895 14 6Z" fill={color} />
        <path d="M14 12C14 13.105 13.105 14 12 14C10.895 14 10 13.105 10 12C10 10.895 10.895 10 12 10C13.105 10 14 10.895 14 12Z" fill={color} />
        <path d="M14 18C14 19.105 13.105 20 12 20C10.895 20 10 19.105 10 18C10 16.895 10.895 16 12 16C13.105 16 14 16.895 14 18Z" fill={color} />
      </svg>
    );
  }

  if (icon === 'microphone') {
    return (
      <svg viewBox="0 0 442.345 442.344">
        <g>
          <path
            fill={color}
            className={className}
            d="M295.975,0c37.622,0,68.11,30.495,68.11,68.11c0,37.614-30.488,68.106-68.11,68.106c-37.609,0-68.105-30.492-68.105-68.106
            C227.869,30.495,258.365,0,295.975,0z"
          />
          <path
            fill={color}
            className={className}
            d="M148.576,256.536c5.681,0,10.722-2.561,14.183-6.532L277.4,144.44c-22.754-5.521-41.646-20.963-51.824-41.475
            l-90.567,120.557c-3.338,4.661-5.316,8.725-5.316,14.122C129.693,248.072,138.157,256.536,148.576,256.536z"
          />
          <path
            fill={color}
            className={className}
            d="M93.474,358.007c38.097,29.274,96.661-26.176,98.849-28.292c0.629-0.549,62.4-54.934,91.197-22.723
            c6.012,6.701,8.524,14.459,7.727,23.712c-3.029,34.308-50.674,78.774-68.785,93.009c-4.521,3.559-5.306,10.118-1.75,14.644
            c2.056,2.62,5.102,3.987,8.2,3.987c2.24,0,4.524-0.737,6.407-2.217c2.962-2.324,72.25-57.222,76.683-107.575
            c1.334-15.107-3.021-28.381-12.937-39.465c-12.695-14.198-36.695-26.878-78.794-6.668c-23.048,11.044-41.072,27.069-42.104,27.987
            c-12.385,11.854-52.203,42.259-72.002,27.054c-4.31-3.31-6.524-7.313-6.989-12.595c-1.559-18.238,17.721-44.495,27.312-55.483
            l21.362-7.449c0,0-4.278-0.477-14.351-9.506c-9.419-8.464-11.918-17.616-11.918-17.616l-9.614,19.532
            c-6.847,7.634-36.097,42.193-33.552,72.277C79.348,341.693,84.553,351.167,93.474,358.007z"
          />
        </g>
      </svg>

    );
  }

  if (icon === 'eye') {
    return (
      <svg viewBox="0 0 64 64" width="16" height="17">
        <path
          className={className}
          opacity="1.000000"
          stroke="none"
          d="
            M65.000000,34.600006
            C57.115997,44.932068 47.431866,52.353470 34.577930,53.814865
            C27.036577,54.672253 19.874416,51.494877 13.850890,47.097469
            C9.310613,43.782898 5.702080,39.192028 1.339408,35.084625
            C1.000000,33.933331 1.000000,32.866661 1.000000,31.399996
            C8.884002,21.067928 18.568140,13.646535 31.422071,12.185132
            C38.963428,11.327731 46.125584,14.505127 52.149113,18.902525
            C56.689388,22.217098 60.297920,26.807970 64.660591,30.915373
            C65.000000,32.066669 65.000000,33.133339 65.000000,34.600006
            M43.925903,45.594242
            C49.189873,41.673164 54.453842,37.752083 59.765728,33.795315
            C41.349796,12.048838 23.482754,13.127064 7.039374,33.009415
            C16.609901,44.999985 30.108356,52.433754 43.925903,45.594242
            z"
        />
        <path
          className={className}
          fill="#FFFFFF"
          opacity="1.000000"
          stroke="none"
          d="
            M43.579308,45.786011
            C30.108356,52.433754 16.609901,44.999985 7.039374,33.009415
            C23.482754,13.127064 41.349796,12.048838 59.765728,33.795315
            C54.453842,37.752083 49.189873,41.673164 43.579308,45.786011
            M45.984547,30.058710
            C45.303207,28.615650 44.729321,27.109032 43.920368,25.741453
            C41.497810,21.645996 35.241409,19.065811 30.269438,20.012314
            C25.553988,20.909983 20.736990,25.855091 20.007254,30.547422
            C19.185925,35.828728 21.722900,41.518661 25.995312,44.010456
            C30.541416,46.661869 34.990192,46.916378 39.680809,44.107235
            C44.811642,41.034447 46.350510,36.477459 45.984547,30.058710
            z"
        />
        <path
          className={className}
          fill="#000000"
          opacity="1.000000"
          stroke="none"
          d="
            M45.991753,30.480000
            C46.350510,36.477459 44.811642,41.034447 39.680809,44.107235
            C34.990192,46.916378 30.541416,46.661869 25.995312,44.010456
            C21.722900,41.518661 19.185925,35.828728 20.007254,30.547422
            C20.736990,25.855091 25.553988,20.909983 30.269438,20.012314
            C35.241409,19.065811 41.497810,21.645996 43.920368,25.741453
            C44.729321,27.109032 45.303207,28.615650 45.991753,30.480000
            M39.970989,29.709717
            C39.684864,29.306627 39.413433,28.892115 39.110332,28.502222
            C36.132626,24.671864 32.730045,24.167601 28.462818,26.917816
            C25.241789,28.993757 24.175863,33.231380 26.399149,36.757000
            C28.461773,40.027843 31.208960,42.125061 35.478073,40.109619
            C40.043129,37.954460 41.591404,34.901974 39.970989,29.709717
            z"
        />
        <path
          className={className}
          fill="#FFFFFF"
          opacity="1.000000"
          stroke="none"
          d="
            M40.008507,30.106375
            C41.591404,34.901974 40.043129,37.954460 35.478073,40.109619
            C31.208960,42.125061 28.461773,40.027843 26.399149,36.757000
            C24.175863,33.231380 25.241789,28.993757 28.462818,26.917816
            C32.730045,24.167601 36.132626,24.671864 39.110332,28.502222
            C39.413433,28.892115 39.684864,29.306627 40.008507,30.106375
            z"
        />
      </svg>
    );
  }

  if (icon === 'close') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path fill={color} className={className} d="M18 6L6 18" />
        <path fill={color} className={className} d="M6 6L18 18" />
      </svg>
    );
  }

  if (icon === 'menu') {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={color} className={className} d="M3 7H21" />
        <path fill={color} className={className} d="M3 12H21" />
        <path fill={color} className={className} d="M3 17H21" />
      </svg>
    );
  }

  if (icon === 'give') {
    return (
      <svg fill="none" viewBox="0 0 20 16">
        <path fill={color} className={className} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
      </svg>
    );
  }

  if (icon === 'share') {
    return (
      <svg width={width} viewBox="0 0 24 21">
        <path fill={color} d="M1.056 21.928c0-6.531 5.661-9.034 10.018-9.375V18.1L22.7 9.044 11.073 0v4.836a10.5 10.5 0 0 0-7.344 3.352C-.618 12.946-.008 21 .076 21.928z" />
      </svg>
    );
  }

  if (icon === 'link') {
    return (
      <svg fill="none" viewBox="0 0 19 19">
        <path className={className} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7" />
      </svg>
    );
  }

  if (icon === 'whatsapp') {
    return (
      <svg viewBox="0 0 80 80">
        <path fill="#f2faff" d="M7.904,58.665L7.8,58.484c-3.263-5.649-4.986-12.102-4.983-18.66 C2.826,19.244,19.577,2.5,40.157,2.5C50.14,2.503,59.521,6.391,66.57,13.446C73.618,20.5,77.5,29.879,77.5,39.855 c-0.01,20.583-16.76,37.328-37.34,37.328c-6.247-0.003-12.418-1.574-17.861-4.543l-0.174-0.096L2.711,77.636L7.904,58.665z" />
        <path fill="#788b9c" d="M40.157,3L40.157,3c9.85,0.003,19.105,3.838,26.059,10.799C73.17,20.76,77,30.013,77,39.855 c-0.009,20.307-16.536,36.828-36.855,36.828c-6.149-0.003-12.237-1.553-17.606-4.482l-0.349-0.19l-0.384,0.101l-18.384,4.82 l4.91-17.933l0.11-0.403l-0.209-0.362c-3.22-5.574-4.92-11.94-4.917-18.41C3.326,19.52,19.852,3,40.157,3 M40.157,2 C19.302,2,2.326,18.969,2.317,39.824C2.313,46.49,4.055,53,7.367,58.735L2,78.339l20.06-5.26 c5.526,3.015,11.751,4.601,18.084,4.604h0.016c20.855,0,37.831-16.969,37.84-37.827c0-10.108-3.933-19.613-11.077-26.764 C59.78,5.942,50.28,2.003,40.157,2L40.157,2z" />
        <path fill="#79ba7e" d="M39.99,70c-5.009-0.003-9.965-1.263-14.332-3.646l-2.867-1.564l-3.159,0.828l-6.482,1.699 l1.659-6.061l0.907-3.312l-1.718-2.974C11.38,50.437,9.997,45.255,10,39.986C10.007,23.453,23.464,10.002,39.997,10 c8.022,0.003,15.558,3.126,21.221,8.793C66.881,24.461,70,31.998,70,40.011C69.992,56.547,56.535,70,39.99,70z" />
        <path fill="#fff" d="M56.561,47.376c-0.9-0.449-5.321-2.626-6.143-2.924c-0.825-0.301-1.424-0.449-2.023,0.449 c-0.599,0.9-2.322,2.924-2.845,3.523c-0.524,0.599-1.048,0.674-1.948,0.226c-0.9-0.449-3.797-1.4-7.23-4.462 c-2.674-2.382-4.478-5.327-5.001-6.227c-0.524-0.9-0.057-1.385,0.394-1.834c0.403-0.403,0.9-1.051,1.349-1.575 c0.449-0.524,0.599-0.9,0.9-1.5c0.301-0.599,0.151-1.126-0.075-1.575c-0.226-0.449-2.023-4.875-2.773-6.673 c-0.729-1.752-1.472-1.515-2.023-1.542c-0.524-0.027-1.123-0.03-1.722-0.03c-0.599,0-1.575,0.226-2.397,1.126 c-0.822,0.9-3.147,3.074-3.147,7.498s3.222,8.699,3.671,9.298c0.449,0.599,6.338,9.678,15.36,13.571 c2.144,0.924,3.821,1.478,5.125,1.894c2.153,0.684,4.113,0.587,5.664,0.355c1.728-0.259,5.321-2.174,6.067-4.273 c0.75-2.099,0.75-3.899,0.524-4.273C58.06,48.051,57.461,47.825,56.561,47.376z" />
      </svg>
    );
  }

  if (icon === 'x') {
    return (
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path className={className} fill={color} d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z" />
      </svg>
    );
  }

  if (icon === 'upload') {
    return (
      <svg viewBox="0 0 24 24">
        <path className={className} fill={color} d="M4 18H20V20H4V18Z" />
        <path className={className} fill={color} d="M12 4L7 9H10V17H14V9H17L12 4Z" />
      </svg>
    );
  }

  if (icon === 'arrow-right') {
    return (
      <svg viewBox="0 0 24 24">
        <path className={className} fill={color} d="M12.6 7.4L16.1 10.9H4V12.9H16.1L12.6 16.4L14 17.8L20 11.9L14 6L12.6 7.4Z" />
      </svg>
    );
  }

  if (icon === 'play-circle') {
    return (
      <svg viewBox="0 0 24 24">
        <path className={className} fill={color} d="M12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4ZM10 16V8L16 12L10 16Z" />
      </svg>

    );
  }

  if (icon === 'google') {
    return (
      <svg width={width} viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    );
  }

  if (icon === 'user') {
    return (
      <svg
        width={width}
        fill={color}
        viewBox="0 0 1024 1024"
      >
        <path d="M837.914838 774.764566c0-27.980261-10.703783-52.738132-31.607882-68.308759-58.392922-39.787168-104.661711-64.805982-186.714496-100.475366-20.726044-7.637957-34.792411-27.450189-34.792411-50.726312 0-16.423041 7.087419-31.924083 19.368116-41.012066 73.433476-54.32221 83.992973-214.32125 83.992973-214.32125 0-94.293573-76.738755-170.732499-171.511235-170.732499-94.770434 0-172.122149 76.5607-172.122149 170.854273 0 0 4.312212 123.051547 51.780317 178.942485l0.004093 0c9.496282 13.553691 19.436678 25.414833 31.737842 35.378765 11.610432 9.925047 19.295462 24.52865 19.295462 40.951691 0 23.280216-14.644535 43.060725-35.370579 50.698682-68.563562 28.569686-126.814244 59.249429-188.084703 100.460016-20.904099 15.569604-34.46086 40.320311-34.46086 68.300572 0 39.774889 27.398 73.092715 64.401776 82.573647 0 0 95.646384 40.135092 256.966513 40.135092 160.177096 0 256.967536-40.078811 256.967536-40.11872l0-0.020466C804.176432 847.862397 837.914838 814.539454 837.914838 774.764566L837.914838 774.764566zM837.914838 774.764566" />

      </svg>
    );
  }

  if (icon === 'clipboard') {
    return (
      <svg width={width} viewBox="0 0 24 24">
        {/* <path d="M8 10H16V11H8V10Z" fill={color} /> */}
        <path d="M8 12H16V13H8V12Z" fill={color} />
        <path d="M8 14H13V15H8V14Z" fill={color} />
        <path d="M15 5V4H9V5H7V6H6V20H18V19H19V5H15ZM10 5H14V7H10V5ZM17 19H7V7H9V8H15V7H17V19Z" fill={color} />
      </svg>

    );
  }

  if (icon === 'settings') {
    return (
      <svg
        width={width}
        viewBox="0 0 32 32"
        fill={color}
      >
        <path
          d="M27.9 17.56C27.96 17.06 28 16.54 28 16C28 15.46 27.96 14.94 27.88 14.44L31.26 11.8C31.56 11.56 31.64 11.12 31.46 10.78L28.26 5.24C28.06 4.88 27.64 4.76 27.28 4.88L23.3 6.48C22.46 5.84 21.58 5.32 20.6 4.92L20 0.68C19.94 0.28 19.6 0 19.2 0H12.8C12.4 0 12.08 0.28 12.02 0.68L11.42 4.92C10.44 5.32 9.53998 5.86 8.71999 6.48L4.73998 4.88C4.37998 4.74 3.95998 4.88 3.75998 5.24L0.559984 10.78C0.359984 11.14 0.439985 11.56 0.759985 11.8L4.13998 14.44C4.05998 14.94 3.99998 15.48 3.99998 16C3.99998 16.52 4.03998 17.06 4.11998 17.56L0.739984 20.2C0.439984 20.44 0.359984 20.88 0.539984 21.22L3.73998 26.76C3.93998 27.12 4.35998 27.24 4.71998 27.12L8.69998 25.52C9.53998 26.16 10.42 26.68 11.4 27.08L12 31.32C12.08 31.72 12.4 32 12.8 32H19.2C19.6 32 19.94 31.72 19.98 31.32L20.58 27.08C21.56 26.68 22.46 26.14 23.28 25.52L27.26 27.12C27.62 27.26 28.04 27.12 28.24 26.76L31.44 21.22C31.64 20.86 31.56 20.44 31.24 20.2L27.9 17.56ZM16 22C12.7 22 9.99998 19.3 9.99998 16C9.99998 12.7 12.7 10 16 10C19.3 10 22 12.7 22 16C22 19.3 19.3 22 16 22Z"
          fill={color}
        />
      </svg>
    );
  }

  if (icon === 'send') {
    return (
      <svg width={width} viewBox="0 0 24 24">
        <path className={className} fill={color} d="M2 21L23 12L2 3V10L17 12L2 14V21Z" />
      </svg>
    );
  }

  if (icon === 'trash') {
    return (
      <svg width={width} viewBox="0 0 24 24">
        <path className={className} fill={color} d="M7 8H17V21H7V8Z" />
        <path className={className} fill={color} d="M19 6H5V4H19V6Z" />
        <path className={className} fill={color} d="M10 11H14V17H10V11Z" />
      </svg>
    );
  }

  if (icon === 'pin') {
    return (
      <svg width={width} viewBox="0 0 512 512">
        <path fill={color} d="M256 73.82c-100.617 0-182.18 81.571-182.18 182.171C73.82 356.6 155.383 438.18 256 438.18c100.608 0 182.18-81.57 182.18-182.188 0-100.608-81.572-182.17-182.18-182.17zm-87.346 269.13 43.137-69.504a135.887 135.887 0 0 0 12.27 14.098 137.293 137.293 0 0 0 14.07 12.288zm170.72-113.58c-4.598 4.587-12.376 5.044-21.016 2.1l-23.114 23.106c11.619 18.87 14.387 37.24 5.317 46.318-3.666 3.665-8.869 5.406-14.994 5.406-11.294 0-25.77-5.915-39.788-16.506a23.267 23.267 0 0 1-.933-.721 104.315 104.315 0 0 1-2.988-2.382c-.395-.325-.782-.641-1.177-.975-.94-.8-1.88-1.627-2.821-2.47a55.09 55.09 0 0 1-1.108-.994 117.656 117.656 0 0 1-7.892-7.936c-.818-.905-1.592-1.82-2.365-2.724-.43-.502-.87-.994-1.283-1.503a110.976 110.976 0 0 1-2.909-3.657c-.114-.15-.237-.308-.352-.457-16.436-21.682-21.683-44.49-11.232-54.932 3.674-3.673 8.859-5.405 14.994-5.405 9.035 0 20.092 3.78 31.333 10.696l23.097-23.088c-2.943-8.64-2.486-16.427 2.101-21.015 8.605-8.604 28.372-2.795 44.148 12.981s21.585 35.544 12.981 44.157z" />
      </svg>
    );
  }

  if (icon === 'chevron-down') {
    return (
      <svg width={width} viewBox="0 0 24 24">
        <path fill={color} d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" />
      </svg>
    );
  }

  if (icon === 'arrow-left') {
    return (
      <svg width={width} viewBox="0 0 24 24">
        <path fill={color} d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
      </svg>
    );
  }

  if (icon === 'pic') {
    return (
      <svg width={width} viewBox="0 0 32 32">
        <g>
          <path fill={color} d="M29 0H3a3 3 0 0 0-3 3v26a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 19.59-4.29-4.29a1 1 0 0 0-1.41 0L19 20.59l-6.29-6.29a1 1 0 0 0-1.41 0L2 23.59V3a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1z" />
          <path fill={color} d="M18 5a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z" />
        </g>
      </svg>
    );
  }

  return <></>;
}

SVG.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
};

SVG.defaultProps = {
  color: 'var(--dark)',
  className: '',
  width: 25,
};

export default SVG;
