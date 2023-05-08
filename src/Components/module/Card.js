import Link from "next/link"

const Card = ({ customer }) => {
    const {name,lastName,email,_id} = customer
  return (
      <div className="card">
          <div className="card__details">
              <p>
                  {name} {lastName}
              </p>
              <p>
                  {email}
              </p>
          </div>
          <div className="card__buttons">
              <button>Delete</button>
              <Link href={`/edit/${_id}`}>Edit</Link>
              <Link href={`/customer/${_id}`}>Detail</Link>
          </div>
    </div>
  )
}

export default Card