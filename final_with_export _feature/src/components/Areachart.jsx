import { AreaChart, Card, Title } from "@tremor/react";
import { useState } from "react";

const Areachart = (props) => {
  const [value, setValue] = useState(null);

  return (
    <div className="m-4">
      <Card>
        <Title>Closed Pull Requests</Title>
        <AreaChart
          className="h-72 mt-4"
          data={props.data}
          index="date"
          categories={["student_weight", "food_weight", "student_height"]}
          colors={["red", "indigo", "green"]}
          yAxisWidth={30}
          onValueChange={(v) => setValue(v)}
          connectNulls={true}
        />
      </Card>
    </div>
  )
}

export default Areachart