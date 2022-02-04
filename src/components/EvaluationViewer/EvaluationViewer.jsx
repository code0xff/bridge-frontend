import React from 'react'
import {
  EuiAccordion,
  EuiButton,
  EuiButtonEmpty,
  EuiMarkdownFormat,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiHorizontalRule,
  EuiOverlayMask,
  EuiModal,
  EuiModalHeader,
  EuiModalBody,
  EuiModalHeaderTitle,
  EuiIcon,
} from '@elastic/eui'
import {Link} from 'react-router-dom'
import {Rating} from "react-simple-star-rating"

function EvaluationViewer(props) {
  const {
    accordionId,
    decScore,
    decDetail,
    perScore,
    perDetail,
    secScore,
    secDetail,
    scalScore,
    scalDetail,
    refDetail,
    isAdmin,
    id,
  } = props

  const [isModalVisible, setIsModalVisible] = React.useState(false)
  const [modalTitle, setModalTitle] = React.useState('')
  const [modalBody, setModalBody] = React.useState('')

  const _showEvaluationStandard = (type) => {
    setIsModalVisible(true)
    if (type === 'decentralization') {
      setModalTitle('탈중앙성')
      setModalBody(`
_* 상위 항목일수록 탈중앙화 정도가 높다고 판단_
### 신뢰의 필요성
- Trustless, 트랜잭션을 처리하는 본 체인의 보안성이 브릿지의 보안성을 보장하는 구조. 본 체인 합의 레벨에서 공격을 수행해야 자금 탈취가 가능. 악의적인 행동의 기술적 난이도 높음.
- Insured, 검증자들에게 자격요건으로 담보를 요구하기 때문에 악의적 행동을 할 경제적 유인이 부족하다는 점에 브릿지의 보안성을 보장하는 구조. 설령 악의적인 행동으로 사용자에게 피해가 발생하면 해당 담보물로 피해 보상. 검증자가 합리적인 행위자라는 점에 의존, 피해 발생 시 보상 구조 있음.
- Bonded, 검증자들에게 담보를 요구하여 악의적인 행동을 할 경제적 유인을 부족하게 만든 구조. 그러나 담보물이 소각될 가능성이 있어 Insured 모델과 달리 사용자의 피해를 보상할 구조 없음. 검증자가 합리적인 행위자라는 점에 의존, 피해 발생 시 보상 구조 없음.
- Low Trusted, 제3자의 신뢰도에 브릿지의 신뢰도가 의존하는 구조로 가장 집중화된 구조. 악의적인 행동 발생 시 규제 또는 보상 구조 없음. 제3자의 신뢰도에 의존하되, 스마트컨트랙트를 활용하는 경우.
- High Trusted, 제3자의 신뢰도에 브릿지의 신뢰도가 의존하는 구조로 가장 집중화된 구조. 악의적인 행동 발생 시 규제 또는 보상 구조 없음. 커스터디 기업의 신뢰도에 의존하는 경우.
### 진입 장벽
- 누구나 일정 조건만 만족하면 크게 어렵지 않게 참여할 수 있는 경우.
- 중개자가 되기 위해 스테이킹이 필요한 경우.
- 유동성 네트워크에서 중개자가 되기 위해 막대한 유동성이 필요한 경우.
- 특정 기관 및 조직만 중개자로 참여 및 활동이 가능한 경우.`)
    } else if (type === 'performance') {
      setModalTitle('성능')
      setModalBody(`
_* 상위 항목일수록 성능 우위에 있다고 판단_
### 수수료
** 네트워크를 사용하기 위해 어쩔 수 없이 발생하는 가스비를 제외한 브리지에서 가져가는 수수료만 고려. 수수료를 브리지를 통해 전송시키는 자금에 비례하게 정한 것이 아닌, 절대값이 정해져 있는 경우 $1,000을 전송한다고 가정하고 계산하여 점수화함. **
- 무료
- 0.1% 미만
- 0.1 ~ 0.3%
- 그 이상
### 유동성 조정
- Lock and Mint 모델을 사용하는 브리지의 경우 자산을 이동시키기 위해 유동성을 고려할 필요가 없으므로, 유동성 조정 과정이 불 필요함.
- 유동성 네트워크 모델을 사용하는 브리지에서 중개인뿐만 아니라 일반 유저들도 유동성 풀에 자금을 예치함으로써 유동성 조정에 참여할 수 있는 경우.
- 유동성 네트워크 모델을 사용하는 브리지에서 중개인만 유동성 조정에 참여할 수 있는 경우.`)
    } else if (type === 'security') {
      setModalTitle('보안')
      setModalBody(`
_* 상위 항목일수록 보안이 강하다고 판단_
### 오딧
- 2개 이상의 업체에서 감사를 받았거나, 네트워크의 재단이 직접 개발한 브리지의 경우.
- 1개의 업체에서 감사를 받은 경우.
- 오딧을 받지 않은 경우.
### 해킹 사례
- 해킹 사례가 존재하지 않음.
- 해킹 사례가 존재함.`)
    } else {
      setModalTitle('범용성')
      setModalBody(`
_* 상위 항목일수록 범용성이 높다고 판단_
### NFT / Message
- Fungible Token이외에 NFT 및 Message 까지 전송이 가능한 경우.
- Fungible Token, NFT, Message 중 2개만 전송이 가능한 경우.
- Fungible Token만 전송이 가능한 경우.
### 지원 체인
- 호환성 상관없이 여러 체인을 지원하는 경우.
- EVM 체인들 간 전송만 지원한다거나, 텐더민트 기반 블록체인들 간 전송만 지원하는 것과 같이 특정 호환되는 체인들에만 지원하는 경우.
- 특정 네트워크를 통해서 특정 코인만 전송하려는 특수 목적을 가진 브리지의 경우.`)
    }
    setIsModalVisible(true)
  }

  return (
    <div className='evaluation-viewer-component'>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={accordionId}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h1># Evaluation</h1>
            </EuiText>
          }
          paddingSize='l'
        >
          <EuiText>
            <h2>
              01 탈중앙성 (Dectralization) <EuiButtonEmpty color="danger" onClick={() => {_showEvaluationStandard('decentralization')}}><EuiIcon type="alert" size="xl" /></EuiButtonEmpty>
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={decScore} showTooltip allowHalfIcon readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {decDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              02 성능 (Performance) <EuiButtonEmpty color="danger" onClick={() => {_showEvaluationStandard('performance')}}><EuiIcon type="alert" size="xl" /></EuiButtonEmpty>
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={perScore} showTooltip readonly={true} allowHalfIcon size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {perDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              03 범용성 (Versatility) <EuiButtonEmpty color="danger" onClick={() => {_showEvaluationStandard('scalability')}}><EuiIcon type="alert" size="xl" /></EuiButtonEmpty>
            </h2>
          </EuiText>
          <EuiSpacer />
          <Rating ratingValue={scalScore} showTooltip allowHalfIcon readonly={true} size="40px"/>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {scalDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              04 보안 (Security) <EuiButtonEmpty color="danger" onClick={() => {_showEvaluationStandard('security')}}><EuiIcon type="alert" size="xl" /></EuiButtonEmpty>
            </h2>
          </EuiText>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {secDetail}
          </EuiMarkdownFormat>
          <EuiHorizontalRule/>
          <EuiText>
            <h2>
              05 현황 (Current Status)
            </h2>
          </EuiText>
          <EuiSpacer />
          <EuiMarkdownFormat>
            {refDetail}
          </EuiMarkdownFormat>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      {
        isAdmin ?
          <div className="evaluation-viewer-edit">
            <Link to={`/evaluation/id/${id}`}>
              <EuiButton fill>Edit</EuiButton>
            </Link>
          </div>
          : null
      }
      {
        isModalVisible ?
          <EuiOverlayMask>
            <EuiModal onClose={() => {setIsModalVisible(false)}}>
              <EuiModalHeader>
                <EuiModalHeaderTitle>
                  {modalTitle}
                </EuiModalHeaderTitle>
              </EuiModalHeader>
              <EuiModalBody>
                <EuiMarkdownFormat>
                  {modalBody}
                </EuiMarkdownFormat>
              </EuiModalBody>
            </EuiModal>
          </EuiOverlayMask> :
          null
      }
    </div>
  )
}

export default EvaluationViewer
