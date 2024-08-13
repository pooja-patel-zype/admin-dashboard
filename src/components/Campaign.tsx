
export interface CampaignProps {
  name: string;
  description: string;
  goal: number;
}

export const Campaign = (props: CampaignProps) => {
  return(
    <>
      <div>
        <p>Campaign</p>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
        <p>{props.goal}</p>
      </div>
    </>
  )
}