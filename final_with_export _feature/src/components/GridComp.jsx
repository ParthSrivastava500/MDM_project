import React from "react";
import { Grid, Col, Card, Text, Metric, Title } from "@tremor/react";

const GridComp = (props) => {
  const data = props.data;
  const latest = data.student_metrics[data.student_metrics.length-1];

  return (
  <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-2 m-4">
    <Col numColSpan={1} numColSpanLg={2}>
    <Card>
        <Title><span className="text-slate-400">Name of the Child:</span></Title>
        <Metric><span>{`${data.name} (${data.gender=="male"?"m":"f"})`}</span></Metric>
      </Card>
    </Col>
    <Card>
        <Title><span className="text-slate-400">Child's Age:</span></Title>
        <Metric><span>{`${data.age} years`}</span></Metric>
    </Card>
    <Col>
      <Card>
        <Title><span className="text-slate-400">Food Weight:</span></Title>
        <Metric><span>{`${latest.food_weight} gm`}</span></Metric>
      </Card>
    </Col>
    <Card>
      <Title><span className="text-slate-400">Weight of Children:</span></Title>
      <Metric><span>{`${latest.student_weight} kg`}</span></Metric>
    </Card>
    <Card>
      <Title><span className="text-slate-400">Height of Children:</span></Title>
      <Metric><span>{`${latest.student_height} cm`}</span></Metric>
    </Card>
  </Grid>
)};

export default GridComp