import React from 'react'
import StarRatings from 'react-star-ratings';
import {
  EuiMarkdownFormat,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiIcon,
  EuiPageHeader,
  EuiRange,
  EuiFormHelpText,
  useGeneratedHtmlId
} from '@elastic/eui'
import { useParams } from 'react-router-dom'

function Viewer() {
  const contents = `
### Title
- detail
- detail
- detail
`
  const params = useParams()
  const [isFixed, setIsFixed] = React.useState(false);
  const [customColorsValue, setCustomColorsValue] = React.useState('15');

  const breadcrumbs = [
    {
      text: 'Bridge',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Multichain',
      href: '#',
      onClick: (e) => {
        e.preventDefault();
      },
    },
    {
      text: 'Information',
    },
  ];


  const customTicks = [
    { label: '1', value: 0 },
    { label: '10', value: 25 },
    { label: '100', value: 50 },
    { label: '300', value: 75 },
    { label: '500+', value: 100 },
  ];
  const customColorsLevels = [
    {
      min: 0,
      max: 25,
      color: '#a2cb9f',
      'data-test-subj': 'customColorLevel',
    },
    {
      min: 25,
      max: 50,
      color: '#a1cbea',
    },
    {
      min: 50,
      max: 75,
      color: '#f2cc8f',
    },
    {
      min: 75,
      max: 100,
      color: '#e07a5f',
    },
  ];
  
  const customTicks2 = [
    { label: 'Trustless', value: 0 },
    { label: 'Insured', value: 33 },
    { label: 'Bonded', value: 66 },
    { label: 'Trusted', value: 100 },
  ];
  const customColorsLevels2= [
    {
      min: 0,
      max: 33,
      color: '#a2cb9f',
      'data-test-subj': 'customColorLevel',
    },
    {
      min: 33,
      max: 66,
      color: '#a1cbea',
    },
    {
      min: 66,
      max: 100,
      color: '#f2cc8f',
    },
  ];

  const rangeWithLevelsId = useGeneratedHtmlId({ prefix: 'rangeWithLevels' });
  const rangeWithLevelsHelpId = useGeneratedHtmlId({
    prefix: 'rangeWithLevelsHelp',
  });
  const rangeWithCustomColorsId = useGeneratedHtmlId({
    prefix: 'rangeWithCustomColors',
  });
  const rangeWithCustomColorsHelpId = useGeneratedHtmlId({
    prefix: 'rangeWithCustomColorsHelp',
  });
  const dualRangeWithLevelsId = useGeneratedHtmlId({
    prefix: 'dualRangeWithLevels',
  });
  const dualRangeWithLevelsHelpId = useGeneratedHtmlId({
    prefix: 'dualRangeWithLevelsHelp',
  }); 
  const onCustomColorsChange = (e) => {
    setCustomColorsValue(e.target.value);
  };

  React.useEffect(() => {
    if (isFixed) document.body.classList.add('euiBody--headerIsFixed--double');

    return () => {
      document.body.classList.remove('euiBody--headerIsFixed--double');
    };
  }, [isFixed]);

  const headers = (
    <>
      <EuiHeader
        theme="dark"
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic">Bridge Evaluation Platform</EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiHeaderSectionItemButton aria-label="Account menu">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        position={isFixed ? 'fixed' : 'static'}
        sections={[
          {
            items: [
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                aria-label="News feed: Updates available"
                notification={true}
              >
                <EuiIcon type="cheer" size="m" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
    </>
  );


  return (
    <div className="viewer-component">
      <EuiSpacer />
      {headers}
      <EuiSpacer />
      <div className="viewer-header">
      <EuiTitle size="l">
        <h1 className="header1">Multichain</h1>
      </EuiTitle>
      <EuiSpacer />
    </div>
      <EuiSpacer />
      <EuiPageHeader 
        pageTitle="탈중앙성(Decentralization)"
        iconType="logoKibana"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//        restrictWidth="800px"
        rightSideItems={[
          <StarRatings
            rating={2.403}
            starDimension="40px"
            starSpacing="10px"
            starRatedColor="orange"
          />,
        ]}
      />
      <EuiSpacer />
        <h2 className="header2">중개인의 수</h2>
      <EuiSpacer />
      
    <EuiRange
        id={rangeWithCustomColorsId}
        value="75"
//        onChange={(e) => onCustomColorsChange(e)}
    onChange="False"
        showTicks
        ticks={customTicks}
        levels={customColorsLevels}
        aria-label="An example of EuiRange with custom colored indicators"
        aria-describedby={rangeWithCustomColorsHelpId}
      />

      <EuiFormHelpText id={rangeWithCustomColorsHelpId}>
        중개인의 수가 많을수록 탈중앙화.
      </EuiFormHelpText>

      <EuiSpacer />
        <h2 className="header2">신뢰의 필요성 </h2>
      <EuiSpacer />
      
    <EuiRange
        id={rangeWithCustomColorsId}
        value={customColorsValue}
//        onChange={(e) => onCustomColorsChange(e)}
        onChange="False"
        showTicks
        ticks={customTicks2}
        levels={customColorsLevels2}
        aria-label="An example of EuiRange with custom colored indicators"
        aria-describedby={rangeWithCustomColorsHelpId}
      />

      <EuiFormHelpText id={rangeWithCustomColorsHelpId}>
       신뢰의 필요성 (돈을 잃을 가능성이 있는지, 돈을 잃을 가능성이 없어도 중개인들이 중앙화되어있는지 없는지)
      </EuiFormHelpText>


      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Performance</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Security</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
      <EuiTitle size="m">
        <h3># Scalability</h3>
      </EuiTitle>
      <EuiMarkdownFormat>
        {contents}
      </EuiMarkdownFormat>
      <EuiSpacer/>
    </div>
  )
}

export default Viewer
