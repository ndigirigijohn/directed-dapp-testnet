import Image from 'next/image'
import { MdLocationOn, MdOutlineMail } from 'react-icons/md'
import { RiErrorWarningLine } from 'react-icons/ri'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'
// import 'chart.js-plugin-labels-dv'

ChartJS.register(ArcElement, Tooltip, Legend)

type SchoolCardProps = {
	image: string
	schoolname?: string
	chart: string
	location?: string
}

const SchoolCard = ({
	image,
	schoolname,
	location,
	chart,
}: SchoolCardProps) => {
	const data = {
		datasets: [
			{
				data: [12, 5, 32, 21, 16],
				backgroundColor: [
					'#395241',
					'#6b8065',
					'#374756',
					'#020202',
					'#797979',
				],
				borderColor: ['#395241', '#6b8065', '#374756', '#020202', '#797979'],
			},
		],
	}

	const options = {}

	return (
		<>
			<div className='school-card'>
				<h4>{schoolname}</h4>
				<div>
					<Image
						src={image}
						alt=''
						width='400'
						height='250'
						className='school-card__image'
					/>
					<div>
						<div className='flex-gap'>
							<MdLocationOn size={20} />
							<p>{location}</p>
						</div>
						<div className='flex-gap'>
							<MdOutlineMail size={20} />
							<p>Thank You Letter</p>
						</div>
					</div>
					<div className='school-card__content'>
						<div className='school-card__chart'>
							<Doughnut
								data={data}
								options={options}
								// plugins={[textCenter]}
							></Doughnut>
						</div>
						<div className='school-card__topics'>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>Git Interaction</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>Loops and Data</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>APIs</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>ReactJS</p>
							</div>
							<div className='school-card__topic flex-gap'>
								<span></span>
								<p>NodeJS</p>
							</div>
						</div>
					</div>

					<div className='flex-gap'>
						<RiErrorWarningLine size={20} />
						<p>Learn more about the scholars</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default SchoolCard
