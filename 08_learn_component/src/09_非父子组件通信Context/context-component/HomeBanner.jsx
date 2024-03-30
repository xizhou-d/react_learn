import ThemeContext from '../context/theme-context'

function HomeBanner() {
    return (
        <div>
            HomeBanner
            {/* 函数式组件中使用 Context 共享数据 */}
            <ThemeContext.Consumer>
                {
                    (value) => <h2>{value.color}</h2>
                }
            </ThemeContext.Consumer>
        </div>
    )    
}

export default HomeBanner