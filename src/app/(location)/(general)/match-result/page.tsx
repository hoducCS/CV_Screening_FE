import ResultItem from "@/modules/MatchResult/ResultItem/ResultItem";

export default function MatchResultPage () {
    return (
        <>
            <div className="">
                <div className="grid grid-cols-2 gap-5">
                    <ResultItem/>
                    <ResultItem/>
                    <ResultItem/>
                    <ResultItem/>
                </div>
            </div>
        </>
    )
}