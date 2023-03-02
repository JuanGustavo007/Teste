
sequencia = [1,1]
i = 0
num = int(input("Entre com um número: "))

while num > len(sequencia):
	sequencia .append(sequencia[i] + sequencia[i+1])
	i+=1

print ('Fibonacci(%d): %d' %(num,sequencia[num-1]))