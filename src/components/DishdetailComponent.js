import React from 'react';
import { Card, CardImg,  CardText, CardBody,
  CardTitle } from 'reactstrap';

  
	function RenderDish({dish}) {
            return(
				<div  className="col-12 col-md-5 m-1">
					<Card width="100%">
						<CardImg top src={dish.image} alt={dish.name} />
						<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
						</CardBody>
					</Card>
				</div>
            );
	}
	
	function RenderComments({comments}) {
		if(comments!=null)
			return(
				<div className="col-12 col-md-5 m1">
					<Card width="100%">
						<h4>Comments</h4>
						<div>{comments.map((value)=>{
							return (<ul key={value.id}>
									<p>{value.comment}</p>
									<p>--{value.author}
									, {value.date}</p>
									</ul>
								   );
						}) }</div>
					</Card>
				</div>
			)
		else
			return(
				<div>
				</div>
			)
	}
	const  DishDetail = (props) => {
		if(props.dish!=null)
		return (
			<div className="container">
				<div className="row">
					<RenderDish dish={props.dish} />
					<RenderComments comments={props.dish.comments}/>
				</div>
			</div>
		);
		else
			return(
			<div>
				
			</div>
		)
	}
	


export default DishDetail;