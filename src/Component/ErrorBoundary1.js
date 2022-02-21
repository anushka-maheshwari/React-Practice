function ErrorBoundary1({heroname})
{
    if(heroname==='joker')
    {
        throw new Error("something get wrong")
    }
    return(
        <div>
            {heroname}
        </div>
    )
}
export default ErrorBoundary1;