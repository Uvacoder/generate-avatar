import * as React from 'react'

export default class Face extends React.Component {
  render () {
    return (
      <g id='Face' transform='translate(76.000000, 82.000000)' fill='#000000'>
        <g
          id='Mouth/Default'
          transform='translate(2.000000, 52.000000)'
          fill-opacity='0.699999988'>
          <path
            d='M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15'
            id='Mouth'
          />
        </g>
        <g
          id='Nose/Default'
          transform='translate(28.000000, 40.000000)'
          fill-opacity='0.16'>
          <path
            d='M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8'
            id='Nose'
          />
        </g>
        <g
          id='Eyes/Default-😀'
          transform='translate(0.000000, 8.000000)'
          fill-opacity='0.599999964'>
          <circle id='Eye' cx='30' cy='22' r='6' />
          <circle id='Eye' cx='82' cy='22' r='6' />
        </g>
        <g id='Eyebrow/Outline/Default' fill-opacity='0.599999964'>
          <g id='I-Browse' transform='translate(12.000000, 6.000000)'>
            <path
              d='M3.63024536,11.1585767 C7.54515501,5.64986673 18.2779197,2.56083721 27.5230268,4.83118046 C28.5957248,5.0946055 29.6788665,4.43856013 29.9422916,3.36586212 C30.2057166,2.2931641 29.5496712,1.21002236 28.4769732,0.94659732 C17.7403633,-1.69001789 5.31209962,1.88699832 0.369754639,8.84142326 C-0.270109626,9.74178291 -0.0589363917,10.9903811 0.84142326,11.6302454 C1.74178291,12.2701096 2.9903811,12.0589364 3.63024536,11.1585767 Z'
              id='Eyebrow'
              fill-rule='nonzero'
            />
            <path
              d='M61.6302454,11.1585767 C65.545155,5.64986673 76.2779197,2.56083721 85.5230268,4.83118046 C86.5957248,5.0946055 87.6788665,4.43856013 87.9422916,3.36586212 C88.2057166,2.2931641 87.5496712,1.21002236 86.4769732,0.94659732 C75.7403633,-1.69001789 63.3120996,1.88699832 58.3697546,8.84142326 C57.7298904,9.74178291 57.9410636,10.9903811 58.8414233,11.6302454 C59.7417829,12.2701096 60.9903811,12.0589364 61.6302454,11.1585767 Z'
              id='Eyebrow'
              fill-rule='nonzero'
              transform='translate(73.000154, 6.039198) scale(-1, 1) translate(-73.000154, -6.039198) '
            />
          </g>
        </g>
      </g>
    )
  }
}