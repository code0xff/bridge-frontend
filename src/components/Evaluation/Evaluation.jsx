import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Editor } from '../Editor'
import '@elastic/eui/dist/eui_theme_light.json'
import {
  EuiButton,
  EuiAccordion,
  EuiSpacer,
  EuiText,
  EuiPanel,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiIcon
} from '@elastic/eui';
import { useGeneratedHtmlId } from '@elastic/eui'
import {Rating} from 'react-simple-star-rating'
import axios from "axios";

function Evaluation() {
  const {id} = useParams()

  const [xchainName, setXchainName] = React.useState('')

  const [decDetail, setDecDetail] = React.useState('')
  const [perDetail, setPerDetail] = React.useState('')
  const [secDetail, setSecDetail] = React.useState('')
  const [scalDetail, setScalDetail] = React.useState('')

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

  const navigate = useNavigate()

  const _saveEvaluation = () => {
    const evaluation = {
      decDetail,
      perDetail,
      secDetail,
      scalDetail,
      decScore,
      perScore,
      secScore,
      scalScore,
      xchainId: id,
    }
    axios.post(`/api/evaluation`, {evaluation})
      .then(response => {
        navigate(`/viewer/id/${id}`)
      })
      .catch(e => {
        console.log(e)
      })
  }

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
    <div className="evaluation-component">
      <EuiText>
        <h1>{xchainName}</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiText>
        <h1># Evaluation</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__1}
          arrowDisplay="none"
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>01 탈중앙성 (Dectralization)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={decDetail} setValue={setDecDetail}/>
          <EuiSpacer/>
          <Rating showTooltip ratingValue={decScore} onClick={(decScore) => {
            setDecScore(decScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__2}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>02 성능 (Performance)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={perDetail} setValue={setPerDetail}/>
          <Rating showTooltip ratingValue={perScore} onClick={(perScore) => {
            setPerScore(perScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>03 보안 (Security)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={secDetail} setValue={setSecDetail}/>
          <Rating showTooltip ratingValue={secScore} onClick={(secScore) => {
            setSecScore(secScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <EuiPanel paddingSize="l">
        <EuiAccordion
          id={multipleAccordionsId__4}
          arrowDisplay="none"
          buttonContent={
            <EuiText>
              <h2>04 확장성 (Scalability)</h2>
            </EuiText>
          }
          paddingSize="l"
        >
          <Editor value={scalDetail} setValue={setScalDetail}/>
          <Rating showTooltip ratingValue={scalScore} onClick={(scalScore) => {
            setScalScore(scalScore)
          }} size="40px"/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer />
      <div className="evaluation-footer">
        <EuiButton color="primary" fill onClick={() => {_saveEvaluation()}}>Submit</EuiButton>&emsp;
        <EuiButton color="text" fill onClick={() => {
          navigate(`/viewer/id/${id}`)
        }}>Cancel</EuiButton>
      </div>
    </div>
  )
}

export default Evaluation
