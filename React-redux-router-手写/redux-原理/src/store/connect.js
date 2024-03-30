import { useState, useEffect, useContext } from 'react'
import ReduxContext from './ReduxContext'

export default function connect(mapStateToProps, mapDispatchToProps) {
    return function(Component) {
        function ConnectComponent(props) {
            const store = useContext(ReduxContext)
            const [stateObj, setStateObj] = useState({...mapStateToProps(store.getData())})

            useEffect(() => {
                store.subscribe(() => {
                    setStateObj(store.getData())
                })
            }, [])

            return (
                <ReduxContext.Consumer>
                    {
                        store => <Component
                            {...props}
                            {...stateObj}
                            {...mapDispatchToProps(store.dispatch)}
                        />
                    }
                </ReduxContext.Consumer>
            )
        }

        return ConnectComponent
    }
}