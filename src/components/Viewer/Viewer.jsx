import React from 'react'
import {
  EuiMarkdownFormat,
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiPanel,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiIcon
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

      <div className="viewer-header">
        <EuiTitle size="l">
          <h1>{params.name}</h1>
        </EuiTitle>
      </div>
      <EuiTitle size="m">
        <h3># Dentralization</h3>
      </EuiTitle>
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
