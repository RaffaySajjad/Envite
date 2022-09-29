import styled from "@emotion/styled";
import Card from "../components/Card";
import Spacer from "../components/Spacer";

const LargeScreenContainer = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f6f2ff;

	@media (max-width: 1200px) {
		display: none;
	}
`;

const Container = styled("div")`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const SmallScreenContainer = styled("div")`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: #f6f2ff;
`;

const LeftPane = styled("div")`
	margin-left: 94px;

	@media (max-width: 1200px) {
		margin-left: 0px;
	}
`;

const RightPane = styled("div")`
	@media (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		border: 1px solid;
	}
`;

const Heading = styled("div")`
	color: #240d57;
	font-weight: 700;
	font-size: 48px;
	line-height: 55.2px;

	@media (max-width: 768px) {
		font-size: 28px;
		line-height: 32.2px;
	}
`;

const Subtext = styled("div")`
	color: #4f4f4f;
	font-weight: 300;
	font-size: 18px;
	line-height: 20.7px;
	text-align: left;
	@media (max-width: 1200px) {
		text-align: left;
	}

	@media (max-width: 768px) {
		font-size: 18px;
		line-height: 20.7px;
	}
`;

const Image = styled("img")`
	width: 500px;
	height: 500px;

	@media (max-width: 1200px) {
		width: 593px;
		height: 593px;
		margin-bottom: 25px;
	}

	@media (max-width: 768px) {
		width: 375px;
		height: 375px;
		margin-bottom: 12px;
	}
`;
const Event: React.FC = (props) => {
	return (
		<>
			<LargeScreenContainer>
				<Container>
					<RightPane>
						<Heading>Birthday Bash</Heading>
						<Spacer height="16px" />
						<Subtext>
							Hosted By: <strong>XYZ</strong>
						</Subtext>
						<Spacer height="52px" />
						<Card
							image="/static/calendar.png"
							title="18 August 6:00PM"
							subtitle="to 19 August 6:00PM"
						/>
						<Card
							image="/static/location.png"
							title="Street name"
							subtitle="Suburb, State, Postcode"
						/>
					</RightPane>
					<LeftPane>
						<Image src="/static/event_image.png" alt="event" />
					</LeftPane>
				</Container>
			</LargeScreenContainer>
			<SmallScreenContainer>
				<LeftPane>
					<Image src="/static/event_image.png" alt="event" />
				</LeftPane>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "left",
						justifyContent: "left",
						width: "54vh",
					}}>
					<Heading>Birthday Bash</Heading>
					<Spacer height="16px" />
					<Subtext>
						Hosted By: <strong>XYZ</strong>
					</Subtext>
					<Spacer height="52px" />
					<Card
						image="/static/calendar.png"
						title="18 August 6:00PM"
						subtitle="to 19 August 6:00PM UTC + 10"
					/>
					<Card
						image="/static/location.png"
						title="Street name"
						subtitle="Suburb, State, Postcode"
					/>
				</div>
			</SmallScreenContainer>
		</>
	);
};

export default Event;
