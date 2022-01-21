import React from 'react'
import '@elastic/eui/dist/eui_theme_light.json'
import { Rating } from 'react-simple-star-rating'
import { 
    EuiSpacer, 
    EuiPanel, 
    EuiText, 
    EuiButton, 
    EuiFieldText,
} from '@elastic/eui'
import { useNavigate, useParams } from 'react-router-dom'

function Feedback() {
    const params = useParams()
    const id = params.id

    const [feeScore, setFeeScore] = React.useState(0) // 0 ~ 5
    const [timeScore, setTimeScore] = React.useState(0)
    const [interfaceScore, setInterfaceScore] = React.useState(0)
    const [supportScore, setSupportScore] = React.useState(0)

    const [feeText, setFeeText] = React.useState('')
    const [timeText, setTimeText] = React.useState('')
    const [interfaceText, setInterfaceText] = React.useState('')
    const [supportText, setSupportText] = React.useState('')

    const navigate = useNavigate()

    return(
        <div className="feedback-component">
            <EuiText>
                <h1># User Review</h1>
            </EuiText>
            <EuiSpacer />

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 01 수수료(Fee) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Rating showTooltip ratingValue={feeScore} onClick={(feeScore) => {setFeeScore(feeScore)}} size="40px"/>
                <EuiSpacer/>
                <EuiText className="feedback-text">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText 
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={feeText}
                    onChange={(e)=>setFeeText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 02 시간(Time) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Rating showTooltip ratingValue={timeScore} onClick={(timeScore) => {setTimeScore(timeScore)}} size="40px"/>
                <EuiSpacer/>
                <EuiText className="feedback-text">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={timeText}
                    onChange={(e)=>setTimeText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 03 유저 인터페이스(User Interface) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Rating showTooltip ratingValue={interfaceScore} onClick={(interfaceScore) => {setInterfaceScore(interfaceScore)}} size="40px"/>
                <EuiSpacer/>
                <EuiText className="feedback-text">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={interfaceText}
                    onChange={(e)=>setInterfaceText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer/>

            <EuiPanel paddingSize="l">
                <EuiText>
                    <p>
                        <h3> 04 사용자 지원(Support) </h3>
                        수수료(Fee)는 브릿지를 사용할 때 추가적으로 지불하게 되는 금액을 말합니다.
                        다음 항목에서는 사용자 경험에 기반해 수수료가 매우 저렴하다(1)부터 매우 비싸다(5)까지 평가할 수 있습니다.  <br /> 
                        ... <br />

                    </p>
                </EuiText>
                <Rating showTooltip ratingValue={supportScore} onClick={(supportScore) => {setSupportScore(supportScore)}} size="40px"/>
                <EuiSpacer/>
                <EuiText className="feedback-text">
                    <p><h4>Additional Feedback</h4></p>
                </EuiText>
                <EuiFieldText
                    fullWidth={true}
                    placeholder="한 줄 평을 남겨주세요."
                    value={supportText}
                    onChange={(e)=>setSupportText(e.target.value)}
                />
            </EuiPanel>
            <EuiSpacer/>
            <div className="feedback-submit"> 
                <EuiButton fill>Submit</EuiButton>&emsp;
                <EuiButton color="text" fill onClick={() => {navigate("/xchain")}}>Cancel</EuiButton>
            </div>
        </div>
    )
}

export default Feedback

