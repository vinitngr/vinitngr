function OneTag({onetag} : {onetag: string}) {
    return (
        <span className="bg-[#2A2A36] text-white/40 px-1 rounded text-sm">{`<${onetag}/>`}</span>
    )
}

export default OneTag