import React from 'react'
import {
  EuiAccordion,
  EuiButton,
  EuiMarkdownFormat,
  EuiPanel,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,
} from '@elastic/eui'
import {Link, useParams} from 'react-router-dom'
import axios from "axios"
import {Rating} from "react-simple-star-rating"
import {connectWallet} from "../../utils/wallet"

function Viewer() {
  const {id} = useParams()

  const [xchainName, setXchainName] = React.useState('')

  const [decDetail, setDecDetail] = React.useState('')
  const [perDetail, setPerDetail] = React.useState('')
  const [secDetail, setSecDetail] = React.useState('')
  const [scalDetail, setScalDetail] = React.useState('')

  const [userAddress, setUserAddress] = React.useState('')

  const [decScore, setDecScore] = React.useState(0)
  const [perScore, setPerScore] = React.useState(0)
  const [secScore, setSecScore] = React.useState(0)
  const [scalScore, setScalScore] = React.useState(0)

  React.useEffect(() => {
    axios.get(`/api/xchain/id/${id}`)
      .then(response => {
        const xchain = response.data
        setXchainName(xchain.xchain_en_name)
      })
      .catch(e => {
        console.log(e)
      })

    axios.get(`/api/evaluation/id/${id}`)
      .then(response => {
        const evaluation = response.data

        setDecDetail(evaluation.dec_detail)
        setPerDetail(evaluation.per_detail)
        setSecDetail(evaluation.sec_detail)
        setScalDetail(evaluation.scal_detail)
        setDecScore(evaluation.dec_score)
        setPerScore(evaluation.per_score)
        setSecScore(evaluation.sec_score)
        setScalScore(evaluation.scal_score)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  const multipleAccordionsId__1 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'first',
  })
  const multipleAccordionsId__2 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'second',
  })
  const multipleAccordionsId__3 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'third',
  })
  const multipleAccordionsId__4 = useGeneratedHtmlId({
    prefix: 'multipleAccordions',
    suffix: 'fourth',
  })

  return (
    <div className='viewer-component'>
      <div className="viewer-wallet">
        <EuiText>
          <h4>{userAddress}</h4>
        </EuiText>
        &emsp;
        <EuiButton
          size='s'
          onClick={() => { connectWallet(setUserAddress) }}
          isDisabled={userAddress !== ''}
          fill={!userAddress}
        >
          Connect Wallet
        </EuiButton>
      </div>
      <EuiText>
        <h1>{xchainName}</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiText>
        <h1># Evaluation</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__1}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                01 탈중앙성 (Dectralization)
                <Rating ratingValue={decScore} readonly={true} size="40px"/>
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiMarkdownFormat>
            {decDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__2}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                02 성능 (Performance)
                <Rating ratingValue={perScore} readonly={true} size="40px"/>
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiMarkdownFormat>
            {perDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                03 보안 (Security)
                <Rating ratingValue={secScore} readonly={true} size="40px"/>
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiMarkdownFormat>
            {secDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__4}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                04 확장성 (Scalability)
                <Rating ratingValue={scalScore} readonly={true} size="40px"/>
              </h2>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiMarkdownFormat>
            {scalDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <div className="viewer-edit">
        {
          userAddress ?
          <Link to={`/evaluation/id/${id}`}>
            <EuiButton fill>Edit</EuiButton>
          </Link>
          : null
        }
        &emsp;
        <Link to={`/xchain`}>
          <EuiButton color="text" fill>To Xchain</EuiButton>
        </Link>
      </div>
    </div>
  )
}

export default Viewer
