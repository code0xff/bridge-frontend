import React, { Fragment } from 'react'
import {
  EuiAccordion,
  EuiButton,
  EuiMarkdownFormat,
  EuiPanel,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId,
  EuiModal,
  EuiModalBody,
  EuiModalHeader,
  EuiModalFooter,
  EuiProgress,
  EuiComment,
  EuiFlexGroup,
  EuiFlexItem
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
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  
  const tempValue = 3.4
  const tempCount = 4033
  const tempBestComment = `This bridge is the best !! :smile:! 

- [x] Trustless 
- [x] Fast

Also smooth, with *great* UX/UI!
`;
  
  const tempWorstComment = `This bridge is scam !! :cry:! 
Never send any of your asset through this bridge.

**SCAM ALERT**
`;
  const tempData = [
    { label: '★★★★★', value: '60' },
    { label: '★★★★', value: '20' },
    { label: '★★★', value: '10' },
    { label: '★★', value: '7' },
    { label: '★', value: '3' },
  ];
  const tempBestCommentData = [
    {address : "0x1C58****" , comment: tempBestComment 
    }
  ];
  const tempWorstCommentData = [
    {address : "0x6E13****" , comment: tempWorstComment
    }
  ];

  const closeModal = () => setIsModalVisible(false);
  const showModal = () => setIsModalVisible(true);
  let modal;

  if (isModalVisible) {
    modal = (
      <EuiModal onClose={closeModal}>
        <EuiModalHeader>
	  <EuiText>
	    <h3>
	      <Rating ratingValue={scalScore} readonly={true} size="40px" initialValue={tempValue}/>
	      {tempCount}
	    </h3>
	  </EuiText>
        </EuiModalHeader>

        <EuiModalBody>
	  <div style={{ maxWidth: 250 }}>
      {tempData.map((item) => (
        <Fragment key={item.value}>
          <EuiProgress
            valueText={true}
            max={100}
            color="primary"
            size="m"
            {...item}
          />
          <EuiSpacer size="s" />
        </Fragment>
      ))}
    </div>
        </EuiModalBody>

        <EuiModalFooter>
          <EuiButton onClick={closeModal} fill>
            Close
          </EuiButton>
        </EuiModalFooter>
      </EuiModal>
    );
  }

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
      <EuiSpacer/>
        </EuiAccordion>
      </EuiPanel>
      <EuiSpacer/>
      <EuiText>
        <h1># User Feedback</h1>
      </EuiText>
      <EuiSpacer/>
      <EuiPanel paddingSize='l'>
        <EuiAccordion
          id={multipleAccordionsId__3}
          arrowDisplay='none'
          initialIsOpen={true}
          buttonContent={
            <EuiText>
              <h2>
                탈중앙성 (Decentralization)
              </h2>
	    </EuiText>
          }
          paddingSize='l'
        >
	  
	  <EuiText>
	    <h3>
	      <Rating ratingValue={scalScore} readonly={true} size="40px" initialValue={tempValue}/>
	      {tempCount}
	      <EuiButton onClick={showModal} fill>
	        자세히 보기
	      </EuiButton>
	      {modal}
	    </h3>
	  </EuiText>
	  <EuiSpacer/>
          
	  <EuiAccordion
	  id={multipleAccordionsId__3}
	  arrowDisplay='left'
	  initialIsOpen={false}
	  buttonContent={
	    <EuiText>
	      <h4>
	        Click here to see other reviews..
	      </h4>
	    </EuiText>
	  } >

	  <EuiSpacer/>
	  <EuiFlexGroup>
    	  <EuiFlexItem>
	    <h2> Best Reviews </h2>
	  <EuiSpacer/>
	  <div>
    	    <EuiComment
	      username={tempBestCommentData[0]["address"]}
     	      event="added a comment"
      	      timestamp="on Jan 1, 2020"
	    >
	    <EuiMarkdownFormat>
	      {tempBestCommentData[0]["comment"]}
	    </EuiMarkdownFormat>
	    </EuiComment>
	  </div>
	  </EuiFlexItem>
    	  
	  <EuiFlexItem>
	    <h2> Worst Reviews </h2>
	  <EuiSpacer/>
	  <div>
    	    <EuiComment
	      username={tempWorstCommentData[0]["address"]}
     	      event="added a comment"
      	      timestamp="on Jan 1, 2020"
	    >
	    <EuiMarkdownFormat>
	      {tempWorstCommentData[0]["comment"]}
	    </EuiMarkdownFormat>
	    </EuiComment>
	  </div>
    	  </EuiFlexItem>
  	  </EuiFlexGroup>
	  
	  </EuiAccordion>
	     
      <EuiSpacer/>
      </EuiAccordion>

      </EuiPanel>
	
      <div className="viewer-edit">
        <Link to={`/evaluation/id/${id}`}>
          <EuiButton fill>Edit</EuiButton>
        </Link>
        &emsp;
        <Link to={`/xchain`}>
          <EuiButton color="text" fill>Cancel</EuiButton>
        </Link>
      </div>
    </div>
  )
}

export default Viewer
