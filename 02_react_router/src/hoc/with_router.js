import { useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";

 export default function withRouter(WrapComponent) {
    return function(props) {
        const navigate = useNavigate()
        const params = useParams()
        const location = useLocation()
        const [searchParams] = useSearchParams()
        const query = Object.fromEntries(searchParams)
        const router = { navigate, params, location, query }
    
        return <WrapComponent {...props} router={router}/>
    }
}