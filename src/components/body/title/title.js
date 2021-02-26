
const Title = ({ data }) => (
    <>
        <div className="title">
            <h1>{data.title}</h1>{data.autor ? (<small> by {data.autor}</small>) : ""}
        </div>
    </>
);
export default Title;