import { useTheme } from 'next-themes'

const ThemeToggleButton = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded"
    >
      Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default ThemeToggleButton