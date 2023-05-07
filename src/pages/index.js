
export default function Home() {
  const testApi = () => {
    fetch('/api/customer',
      {
        method: "POST",
        body: JSON.stringify({
          data: {
            name: "iman",
            lastName: "behroozi",
            email: "iman@gmail.com"
          }
        }),
        headers: { "Content-Type": "application/json" }

      }
    )
      .then(res => res.json())
      .then(data => console.log(data))
  }
  return (
    <>
      <h1>I-CRM</h1>
      <button onClick={testApi}>Click and check connect DB</button>
    </>
  )
}
