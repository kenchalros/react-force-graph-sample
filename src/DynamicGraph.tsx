import React, { useState, useCallback, useRef } from 'react';
import ForceGraph2D, { NodeObject, LinkObject, GraphData } from 'react-force-graph-2d';
import { roundedRectStroke } from './Canvas';
import { Node, Link } from './data';

export const DynamicGraph: React.FC<{graphData: GraphData}> = ({graphData}) => {
  const [data, setData] = useState(graphData)
  const fgRef: any = useRef();

  /**
   * Callback method of left click.
   * A clicked node will be removed.
   */
  const handleClick = useCallback((node: NodeObject) => {
    const {nodes, links} = data;
    const newLinks = links.filter((l: LinkObject) => l.source !== node && l.target !== node);
    const newNodes = nodes.filter((n: NodeObject) => n.id !== node.id);
    setData({nodes: newNodes, links: newLinks});
  }, [data, setData]);

  /**
   * Callback method of right click.
   * This callback will create a node and link to a clicked node.
   */
  const handleRightClick = useCallback((node: NodeObject) => {
    const {nodes, links} = data;
    const new_id = nodes.length+1;
    const newNode: Node = {
      id: new_id,
      name: "name"+String(new_id),
      val: 5,
    }
    const newLink: Link = {
      source: node.id!,
      target: new_id
    };
    setData({
      nodes: [...nodes, newNode as NodeObject],
      links: [...links, newLink as LinkObject],
    })
  }, [data, setData])

  /**
   * Custom render function for `nodeCanvasObject` of `ForceGraph2D`
   */
  const canvasRender = (node: NodeObject, ctx: CanvasRenderingContext2D, globalScale: any) => {
    const label = (node as Node).name;
    const fontSize = 16/globalScale;
    ctx.font = `${fontSize}px Sans-Serif`;
    const textWidth = ctx.measureText(label).width;
    const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 1);
    roundedRectStroke(
      ctx,
      {x: node.x! - bckgDimensions[0]/2, y: node.y! - bckgDimensions[1]/2},
      {width: bckgDimensions[0], height: bckgDimensions[1]},
      1);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'gray';
    ctx.fillText(label, node.x!, node.y!);
  };

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={data}
      onNodeClick={handleClick}
      onNodeRightClick={handleRightClick}
      nodeCanvasObject={canvasRender}
    />
  )
}
