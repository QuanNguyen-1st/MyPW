# import os
# with open('./10k-pass.txt', 'wb+') as writeout:
#   with open('./10-million-password-list-top-10000.txt', 'rb') as readin:
#     for line in readin:
#       data = line[:-1]
#       data = b"('" + data + b"'),\n" 
#       # writeout.write(f"('{line[:-1]}'),\n")
#       writeout.write(data)

chunk_size = 10000
index = 0

with open('./10k-pass.txt', 'rb') as readin:
  while True:
    chunk = readin.readlines(chunk_size)
    if not chunk:
      break
    
    with open(f'./data_{index}.txt', 'wb+') as writeout:
      for line in chunk:
        writeout.write(line)
    
    index += 1
