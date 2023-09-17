import React from 'react'

function Time(props) {
	return (
		<>
			{props.time ? (
                  <time className="text-xs ml-2 opacity-50">
                    {new Date(props.time).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}{" "}
                    {new Date(props.time).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    })}
                  </time>
                ) : null}
		</>
	)
}

export default Time