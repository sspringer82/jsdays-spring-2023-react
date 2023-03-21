# 01 - Custom Hook

Erzeuge einen custom hook "usePerson" in den du die data-handling-logik der List-Komponente auslagerst.

Da kommt rein:
- Lifecycle
- Zugriff auf den Context
- save
- delete

```javascript

function useSomething() {
  const [values, setValues] = useState();
  useEffect(() => {
    // datafetching
    setValues(myValue);
  }, []);

  function doSomething(xxx) {
    setValues(xxx)
  }

  return {
    values,
    doSomething
  }
}

function MyComponent() {
  const {values, doSomething} = useSomething();
  return <div></div>;
}
```